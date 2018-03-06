import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { PostsList } from './..';

const offset = props => props.match.params.IndexOffset || 1;
// convert array of posts to array of postsids and convert it to a string
const postsIds = xs => xs.map(x => x.id).join(',');

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }
  onShowSizeChange(current, pageSize) {
    this.props.changePostsPerPage(pageSize);
    this.props.history.push(`${String(current) === '1' ? '' : '/'+current}`);
  }
  componentDidMount() {
    this.props.fetchPostsIds()
      .then(postsStoriesIds => this.props.fetchFilteredPosts(
        offset(this.props),
        postsStoriesIds,
        this.props.postsPerPage
      ));
  }
  componentWillReceiveProps(nextProps) {
    if(offset(nextProps) !== offset(this.props) || this.props.postsPerPage !== nextProps.postsPerPage) {
      this.props.fetchFilteredPosts(offset(nextProps), this.props.topStoriesIds, nextProps.postsPerPage)
    }
  }
  shouldComponentUpdate(nextProps) {
    return postsIds(this.props.posts) !== postsIds(nextProps.posts);
  }
  render() {
    const { topStoriesIds, posts } = this.props;
    return (
      <div className='container'>
        <PostsList posts={posts} />
        <div className='pagination'>
          <Pagination
            showSizeChanger
            onShowSizeChange={this.onShowSizeChange}
            defaultCurrent={this.props.match.params.IndexOffset}
            onChange={this.onShowSizeChange}
            total={topStoriesIds.length}
          />
        </div>
      </div>
    )
  }
}

PageIndex.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  topStoriesIds: PropTypes.array.isRequired,
  postsPerPage: PropTypes.number.isRequired,
};

export default PageIndex;
