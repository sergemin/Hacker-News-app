import { connect } from 'react-redux';
import PagePost from './component';
import { infoPostDuck, commentsDuck } from './../../store/ducks';

const mapStateToProps = state => ({
  postInfo: infoPostDuck.selectors.info(state),
  comments: commentsDuck.selectors.root(state),
});

const mapDispatchToProps = {
  fetchInfo: infoPostDuck.actions.fetchInfo,
  clearInfo: infoPostDuck.actions.clearInfo,
  fetchComments: commentsDuck.actions.fetchComments,
  clearComments: commentsDuck.actions.clearComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePost);
