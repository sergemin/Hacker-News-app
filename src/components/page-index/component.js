import React from 'react';
import PropTypes from 'prop-types';

import { PostsList, Pagination } from './..';

import { api } from './../../helpers';

const isWithinLimits = (min, max) => (x, i) => (i >= min && i < max);

const filterPostIdsForCurrentPage = (posts, pageIndex, postsPerPage) => {
  const minLimit = postsPerPage * (pageIndex - 1);
  const maxLimit = postsPerPage * pageIndex;
  return posts.filter(isWithinLimits(minLimit, maxLimit))
};

const fetchPost = x => api(`/item/${x}.json`);
const fetchPosts = posts => Promise.all(posts.map(fetchPost));

// convert array of posts to array of postsids and convert it to a string
const postsIds = xs => xs.map(x => x.id).join(',');

const offset = props => props.match.params.IndexOffset || 1;

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getTopStories = this.getTopStories.bind(this);
    this.getFilteredPosts = this.getFilteredPosts.bind(this);
  }
  getTopStories = () => {
    if (this.props.topStoriesIds.length !== 0) {
      return Promise.resolve(this.props.topStoriesIds);
    }
    return api('/topstories.json')
      .then(topStoriesIds => {
        this.props.setTopStoriesIds(topStoriesIds);
        return topStoriesIds;
      });
  };
  getFilteredPosts = offset => {
    return this.getTopStories()
      .then(topStoriesIds => filterPostIdsForCurrentPage(
        topStoriesIds,
        offset,
        this.props.postsPerPage
      ))
      .then(fetchPosts)
      .then(posts => {
        this.props.setPagePosts(posts);
      })
      .catch(error => {
        console.log('request failed', error);
      });
  };
  componentDidMount() {
    this.getFilteredPosts(offset(this.props));
  }
  componentWillReceiveProps(nextProps) {
    if(offset(nextProps) !== offset(this.props)) {
      this.getFilteredPosts(offset(nextProps));
    }
  }
  shouldComponentUpdate(nextProps) {
    return postsIds(this.props.posts) !== postsIds(nextProps.posts);
  }
  render() {
    const { topStoriesIds, postsPerPage, posts } = this.props;
    return [
      <PostsList
        posts={posts}
        key={1}
      />,
      <Pagination
        paginationCount={topStoriesIds.length/postsPerPage}
        key={2}
      />
    ];
  }
}

PageIndex.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  topStoriesIds: PropTypes.array.isRequired,
  postsPerPage: PropTypes.string.isRequired,
};

export default PageIndex;
