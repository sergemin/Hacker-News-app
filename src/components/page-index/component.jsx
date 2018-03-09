import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { PostsList } from './..';
import './slyles.scss';

const offset = props => props.match.params.IndexOffset || 1;
// convert array of posts to array of postsids and convert it to a string
const postsIds = arr => arr.map(item => item.id).join(',');

class PageIndex extends Component {
  constructor(props) {
    super(props);
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPostsIds()
      .then(postsStoriesIds => this.props.fetchFilteredPosts(
        offset(this.props),
        postsStoriesIds,
        this.props.postsPerPage,
      ));
  }
  componentWillReceiveProps(nextProps) {
    if (offset(nextProps) !== offset(this.props) || this.props.postsPerPage !== nextProps.postsPerPage) {
      this.props.fetchFilteredPosts(offset(nextProps), this.props.topStoriesIds, nextProps.postsPerPage);
    }
  }
  shouldComponentUpdate(nextProps) {
    return postsIds(this.props.posts) !== postsIds(nextProps.posts);
  }
  onShowSizeChange(current, pageSize) {
    this.props.changePostsPerPage(pageSize);
    this.props.history.push(`${String(current) === '1' ? '' : `/${current}`}`);
  }
  render() {
    const { topStoriesIds, posts, fetchFilteredPosts } = this.props;

    return (
      <div className="container">
        <PostsList posts={posts} />
        <div className="pagination">
          <Pagination
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={Number(this.props.match.params.IndexOffset)}
            onChange={(index, perPage) => {
              fetchFilteredPosts(index, topStoriesIds, perPage);
              this.props.history.push(`${String(index) === '1' ? '' : `/${index}`}`);
            }}
            total={topStoriesIds.length}
          />
        </div>
      </div>
    );
  }
}

PageIndex.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  topStoriesIds: PropTypes.array.isRequired,
  changePostsPerPage: PropTypes.func.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  fetchPostsIds: PropTypes.func.isRequired,
  fetchFilteredPosts: PropTypes.func.isRequired,
};

export default PageIndex;
