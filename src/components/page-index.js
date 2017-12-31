import React from 'react';
import { withRouter } from 'react-router';

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

const offset = props => props.match.params.IndexOffset || 1;

// TODO prop-types
// TODO dont re-render if offset havent been changed
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
        .catch(console.log)
    }
    componentDidMount() {
        this.getFilteredPosts(offset(this.props));
    }
    componentWillReceiveProps(nextProps) {
        // TODO dont refetch if the page offset didnt change
        this.getFilteredPosts(offset(this.props));
    }
    render() {
        const { topStoriesIds, postPerPage } = this.state;
        return [
            <PostsList
                posts={this.state.posts}
                key={1}
            />,
            <Pagination
                paginationCount={topStoriesIds.length/postPerPage}
                offset={offset(this.props)}
                key={2}
            />
        ];
    }
}

export default withRouter(PageIndex);
