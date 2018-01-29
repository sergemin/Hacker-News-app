import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PageIndex from './component';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispathToProps = {
  onFetchPosts: 'fetch'
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps)(PageIndex));