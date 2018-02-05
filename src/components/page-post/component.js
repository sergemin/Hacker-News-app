import React from 'react';
import PropTypes from 'prop-types';
import { api } from './../../helpers';
import { Comments } from './..';
import './styles.css';

export default class PagePost extends React.Component {
  constructor(props) {
    super(props);
    this.getComments = this.getComments.bind(this);
    this.getPostInfo = this.getPostInfo.bind(this);
  }
  getPostInfo = () => {

    if(Object.keys(this.props.postInfo).length !==0) {
      return Promise.resolve(this.props.postInfo);
    }
    return api(`/item/${this.props.match.params.postID}.json`)
      .then(postInfo => {
        this.props.setInfo(postInfo);
        return postInfo})

  };
  getComments = () => {
    const commentsIds = this.props.postInfo.kids;

    if (commentsIds && commentsIds.length !== 0) {
      this.props.fetchComments(commentsIds);
    };
  };
  componentDidMount() {
    this.getPostInfo()
      .then(() => this.getComments())
      .catch(error => console.log('request failed', error));
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
