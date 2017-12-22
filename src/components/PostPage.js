import React from 'react';
import './PostPage.css';
import fetchJSON from './../helpers/fetch-json';


export default class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: []
        }
    }
    componentDidMount() {
        fetchJSON(`https://hacker-news.firebaseio.com/v0/item/${this.props.match.params.postID}.json`)
            .then(response => {
                this.setState({
                    postInfo: response
                })
            })
            .catch(error => {
                console.log('request failed', error)
            });
    }
    render() {
        let postInfo = this.state.postInfo;
        return (
            <section className="page-section">
                <div className="container">
                    <h1>{postInfo.title}</h1>
                    <div className="post">
                        <div className="post__creator">{postInfo.by}</div>
                        <div className="post__date">{new Date(postInfo.time).toLocaleString()}</div>
                    </div>
                </div>
            </section>
        )
    }
}