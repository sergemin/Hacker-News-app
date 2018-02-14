import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { PostsList, Pagination } from './..';

const offset = props => props.match.params.IndexOffset || 1;
// convert array of posts to array of postsids and convert it to a string
const postsIds = xs => xs.map(x => x.id).join(',');

class PageIndex extends React.Component {
  componentDidMount() {
    this.props.showSpinner();
    this.props.fetchPostsIds()
      .then(postsStoriesIds => this.props.fetchFilteredPosts(
        offset(this.props),
        postsStoriesIds,
        this.props.postsPerPage
        ));
  }
  componentWillReceiveProps(nextProps) {
    if(offset(nextProps) !== offset(this.props)) {
      this.props.fetchFilteredPosts(offset(nextProps), this.props.topStoriesIds, this.props.postsPerPage)
    }
  }
  shouldComponentUpdate(nextProps) {
    return postsIds(this.props.posts) !== postsIds(nextProps.posts);
  }
  render() {
    const { topStoriesIds, postsPerPage, posts } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <PostsList posts={posts} />
          <Pagination paginationCount={topStoriesIds.length/postsPerPage} />
        </Grid>
      </Grid>
    )
  }
}

PageIndex.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  topStoriesIds: PropTypes.array.isRequired,
  postsPerPage: PropTypes.string.isRequired,
};

export default PageIndex;
