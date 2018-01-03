import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { PostsList, Pagination } from './';

import { api } from './../helpers/';

const isWithinLimits = (min, max) => (x, i) => (i >= min && i < max);

const filterPostIdsForCurrentPage = (posts, pageIndex, postsPerPage) => {
  const minLimit = postsPerPage * (pageIndex - 1);
  const maxLimit = postsPerPage * pageIndex;
  return posts.filter(isWithinLimits(minLimit, maxLimit))
}

const fetchPost = x => api(`/item/${x}.json`);
const fetchPosts = posts => Promise.all(posts.map(fetchPost));

// convert array of posts to array of postsids and convert it to a string
const postsIds = xs => xs.map(x => x.id).join(',');

const offset = props => props.match.params.IndexOffset || 1;
// TODO prop-types
class PageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            topStoriesIds: [],
            postPerPage: 10
        }
        this.getTopStories = this.getTopStories.bind(this);
        this.getFilteredPosts = this.getFilteredPosts.bind(this);
    }

    getTopStories = () => {
      if (this.state.topStoriesIds.length !== 0) {
        return Promise.resolve(this.state.topStoriesIds);
      }
      return api('/topstories.json')
          .then(topStoriesIds => {
              this.setState({ topStoriesIds });
              return topStoriesIds;
          });
    }
    getFilteredPosts = offset => {
      return this.getTopStories()
        .then(topStoriesIds => filterPostIdsForCurrentPage(
          topStoriesIds,
          offset,
          this.state.postPerPage
        ))
        .then(fetchPosts)
        .then(posts => { this.setState({ posts }); })
        .catch(error => {
            console.log('request failed', error);
        });
    }
    componentDidMount() {
        this.getFilteredPosts(offset(this.props));
    }
    componentWillReceiveProps(nextProps) {
        // TODO dont refetch if the page offset didnt change
        if(offset(nextProps) !== offset(this.props)) {
            this.getFilteredPosts(offset(nextProps));
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return postsIds(this.state.posts) !== postsIds(nextState.posts);
    }
    render() {
        const { topStoriesIds, postPerPage, posts } = this.state;
        return [
            <PostsList
                posts={posts}
                key={1}
            />,
            <Pagination
                paginationCount={topStoriesIds.length/postPerPage}
                key={2}
            />
        ];
    }
}

PageIndex.propTypes = {
    IndexOffset: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default withRouter(PageIndex);
