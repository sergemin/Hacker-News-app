import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PageIndex from './component';
import * as ducks from './../../store/ducks';

const mapStateToProps = state => ({
  postsPerPage: ducks.postsPerPageDuck.selectors.root(state),
  topStoriesIds: ducks.topStoriesIdsDuck.selectors.items(state),
  posts: ducks.postsDuck.selectors.items(state),
});

const mapDispatchToProps = {
  changePostsPerPage: ducks.postsPerPageDuck.actions.changePostsPerPage,
  fetchPostsIds: ducks.topStoriesIdsDuck.actions.fetchPostsIds,
  fetchFilteredPosts: ducks.postsDuck.actions.fetchFilteredPosts,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(PageIndex);
