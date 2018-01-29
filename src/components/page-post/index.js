import React from 'react';
import PropTypes from 'prop-types';
import { api } from './../../helpers';
import { Comments } from './..';
import './styles.css';

export default class PagePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: {},
            comments: []
        };
        this.getComments = this.getComments.bind(this);
        this.getPostInfo = this.getPostInfo.bind(this);
    }
    getPostInfo = () => {

        if(Object.keys(this.state.postInfo).length !==0) {
            return Promise.resolve(this.state.postInfo);
        }
        return api(`/item/${this.props.match.params.postID}.json`)
            .then(postInfo => { this.setState({ postInfo }); return postInfo})

    };
    getComments = () => {
        const commentsIds = this.state.postInfo.kids;

        if (commentsIds && commentsIds.length !== 0) {
            const fetchComment = x => api(`/item/${x}.json`);
            Promise.all(commentsIds.map(fetchComment))
                .then(comments => {this.setState({ comments })})
                .catch(error => console.log({ error }))
        }
    };
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
                    <Comments comments={this.state.comments} />
                </div>
            </section>
        )
    }
}
PagePost.propTypes = {
    match: PropTypes.object.isRequired
};
