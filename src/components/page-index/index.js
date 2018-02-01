import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import PageIndex from './component';
import { mainPageDuck } from './../../store/ducks';


const mapStateToProps = state => ({
  topStoriesIds: mainPageDuck.selectors.topStoriesIds(state),
  posts: mainPageDuck.selectors.posts(state),
  postsPerPage: mainPageDuck.selectors.postsPerPage(state),
});

const mapDispathToProps = {
  fetchIds: mainPageDuck.actions.fetchIds,
  fetchPosts: mainPageDuck.actions.fetchPosts,
  changePostsPerPage: mainPageDuck.actions.changePostsPerPage,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispathToProps),
);

export default enhance(PageIndex);
