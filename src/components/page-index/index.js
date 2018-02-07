import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PageIndex from './component';
import { postsPerPageDuck, topStoriesIdsDuck, postsDuck } from './../../store/ducks';


const mapStateToProps = state => ({
  topStoriesIds: topStoriesIdsDuck.selectors.items(state),
  posts: postsDuck.selectors.items(state),
  postsPerPage: postsPerPageDuck.selectors.root(state),
});

const mapDispatchToProps = {
  fetchPostsIds: topStoriesIdsDuck.actions.fetchPostsIds,
  fetchFilteredPosts: postsDuck.actions.fetchFilteredPosts,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(PageIndex);
