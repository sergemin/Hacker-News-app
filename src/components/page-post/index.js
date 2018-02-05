import { connect } from 'react-redux';
import PagePost from './component';
import { infoPostDuck, commentsDuck } from './../../store/ducks';

const mapStateToProps = state => ({
  postInfo: infoPostDuck.selectors.root(state),
  comments: commentsDuck.selectors.root(state),
});

const mapDispathToProps = {
  setInfo: infoPostDuck.actions.setInfo,
  fetchComments: commentsDuck.actions.fetchComments,
};

export default connect(
    mapStateToProps,
    mapDispathToProps)(PagePost);
