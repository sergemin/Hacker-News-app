import React from 'react';
import './PostPage.css';
import { Link } from 'react-router-dom';
import fetchJSON from './../helpers/fetch-json';


export default class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: []
        }
    }
    componentDidMount() {
        fetchJSON(`https://api.github.com/users/${this.props.match.params.postID}`)
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
                    <Link className='link-app' to='/'>Home page</Link>
                    <h1>{postInfo.name}</h1>
                    <div>
                        <img src={postInfo.avatar_url} alt={postInfo.login} />
                    </div>
                    <p>Github profile:
                        <a href={postInfo.html_url} target="_blank">{postInfo.html_url}</a>
                    </p>

                </div>
            </section>
        )
    }
}