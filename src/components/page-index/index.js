import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PageIndex from './component';
import { postsPerPageDuck, topStoriedIdsDuck, postsDuck } from './../../store/ducks';


const mapStateToProps = state => ({
  topStoriesIds: topStoriedIdsDuck.selectors.root(state),
  posts: postsDuck.selectors.root(state),
  postsPerPage: postsPerPageDuck.selectors.root(state),
});

const mapDispathToProps = {
  setTopStoriesIds: topStoriedIdsDuck.actions.setTopStoriesIds,
  setPagePosts: postsDuck.actions.setPagePosts,
  changePostsPerPage: postsPerPageDuck.actions.changePostsPerPage,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispathToProps),
);

export default enhance(PageIndex);
