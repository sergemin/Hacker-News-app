import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PageIndex from './component';
import { mainPageDuck } from './../../store/ducks';


const mapStateToProps = state => ({
  topStoriesIds: mainPageDuck.selectors.topStoriesIds(state),
  posts: mainPageDuck.selectors.posts(state),
  postsPerPage: mainPageDuck.selectors.postsPerPage(state),
});

const mapDispathToProps = {
  onFetchPosts: 'fetch'
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps)(PageIndex));