import { connect } from 'react-redux';
import PagePost from './component';
import { infoPostDuck, commentsDuck } from './../../store/ducks';

const mapStateToProps = state => ({
  postInfo: infoPostDuck.selectors.info(state),
  comments: commentsDuck.selectors.root(state),
});

const mapDispatchToProps = {
  fetchInfo: infoPostDuck.actions.fetchInfo,
  fetchComments: commentsDuck.actions.fetchComments,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(PagePost);
