import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PageIndex from './component';
import { mainPageDuck } from './../../store/ducks';


const mapStateToProps = state => ({
  topStoriesIds: mainPageDuck.selectors.topStoriesIds(state),
  posts: mainPageDuck.selectors.posts(state),
  postsPerPage: mainPageDuck.selectors.postsPerPage(state),
});

const mapDispathToProps = {
  setTopStoriesIds: mainPageDuck.actions.setTopStoriesIds,
  setPagePosts: mainPageDuck.actions.setPagePosts,
  changePostsPerPage: mainPageDuck.actions.changePostsPerPage,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispathToProps),
);

export default enhance(PageIndex);
