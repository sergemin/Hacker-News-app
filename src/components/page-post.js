import React from 'react';
import { api } from '../helpers';

import './page-post.css';

// TODO prop-types, still relevant
export default class PagePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: []
        }
    }
    componentDidMount() {
        api(`/item/${this.props.match.params.postID}.json`)
            .then(postInfo => { this.setState({ postInfo }); })
            .catch(error => {
                console.log('request failed', error)
            });
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
                </div>
            </section>
        )
    }
}
