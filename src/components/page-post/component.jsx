import React from 'react';
import PropTypes from 'prop-types';
import { Comments } from '..';
import './styles.scss';

export default class PagePost extends React.Component {
  componentDidMount() {
    this.props.fetchInfo(this.props.match.params.postID)
      .then(({ kids }) => this.props.fetchComments(kids));
  }
  componentWillUnmount() {
    this.props.clearInfo();
    this.props.clearComments();
  }
  render() {
    const { postInfo, comments } = this.props;

    return (
      <section className="page-section">
        <div className="container">
          <h1>{postInfo.title}</h1>
          <div className="post_description">
            {postInfo.body}
          </div>
          <Comments comments={comments} />
        </div>
      </section>
    );
  }
}
PagePost.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postInfo: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.object.isRequired,
  fetchInfo: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  clearInfo: PropTypes.func.isRequired,
  clearComments: PropTypes.func.isRequired,
};
