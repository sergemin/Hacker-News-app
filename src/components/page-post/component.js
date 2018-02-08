import React from 'react';
import PropTypes from 'prop-types';
import { Comments } from '..';
import './styles.css';

export default class PagePost extends React.Component {
  componentDidMount() {
    this.props.fetchInfo(this.props.match.params.postID)
      .then(({kids}) => this.props.fetchComments(kids))
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
    )
  }
}
PagePost.propTypes = {
  match: PropTypes.object.isRequired,
  postInfo: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
};
