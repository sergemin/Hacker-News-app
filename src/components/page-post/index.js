import { connect } from 'react-redux';
import PagePost from './component';
import { singlePostDuck } from './../../store/ducks';

const mapStateToProps = state => ({
  postInfo: singlePostDuck.selectors.postInfo(state),
  comments: singlePostDuck.selectors.comments(state),
});

const mapDispathToProps = {
  onFetchInfo: singlePostDuck.actions.fetchInfo,
  onFetchComments: singlePostDuck.actions.fetchComments,
};

export default connect(
    mapStateToProps,
    mapDispathToProps)(PagePost);