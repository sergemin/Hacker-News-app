import React from 'react';
import PropTypes from 'prop-types';
import { api } from '../helpers';

import './page-post.css';
import Comments from './comments';

export default class PagePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: [],
            comments: []
        }
        this.getComments = this.getComments.bind(this);
        this.getPostInfo = this.getPostInfo.bind(this);
    }
    getPostInfo = () => {
        if(this.state.postInfo.length !==0) {
            return Promise.resolve(this.state.postInfo);
        }
        return api(`/item/${this.props.match.params.postID}.json`)
            .then(postInfo => { this.setState({ postInfo }); return postInfo})

    }
    getComments = () => {
        if(this.state.comments.length !==0) {
            return Promise.resolve(this.state.comments);
        }
        return Promise.resolve(this.state.postInfo.kids)
            .then(commentsIds => commentsIds.length === 0 ? Promise.reject() : commentsIds)
            .catch(() => this.setState({comments: 'no comments yet'})) // here I need abort the executing of chain of promises
            .then(commentsIds => commentsIds.map(item => api(`/item/${item}.json`)))
            .then(comments => Promise.all(comments))
            .then(comments => {
                this.setState({ comments });
                return comments;
            })
    }
    componentDidMount() {
        this.getPostInfo()
            .then(() => this.getComments())
            .catch(error => console.log('request failed', error));
    }
    render() {
        const { postInfo } = this.state;
        return (
            <section className="page-section">
                <div className="container">
                    <h1>{postInfo.title}</h1>
                    <div className="post_description">
                        {postInfo.body}
                    </div>
                    <h3>Comments</h3>
                    <Comments comments={this.state.comments} />
                </div>
            </section>
        )
    }
}
PagePost.propTypes = {
    match: PropTypes.object.isRequired
};
