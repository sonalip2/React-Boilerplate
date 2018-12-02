import React, { Component } from 'react'

import Loader from '../../components/common/loader';
import { getBlogs } from '../../utils/api_calls';
import BlogList from '../../components/blog/list';
import {getPostValues} from '../../utils/actions.js';
import { connect } from 'react-redux';

class ListBlog extends Component {

	state = {
		posts: [],
		loading: true,
	}

	componentDidMount() {
		this.fetchBlog()
	}

	fetchBlog = async () => {
		const posts = await getBlogs()
		console.log('posts',posts)
		this.props.getPostValues({ posts });
		this.setState({ posts, loading: false })
	}

	navigateToView = (id) => {
		this.props.history.push(`/posts/${id}`)
	}

	render() {
		const { posts, loading, is_more, loadingMore } = this.state
		if (loading) {
			return <Loader />
		}

		return (
			<div>
				<div>posts</div>
				<BlogList posts={posts} is_more={is_more} navigateToView={this.navigateToView} loadMoreBlog={this.loadMoreBlog} loadingMore={loadingMore} />
			</div>
		)
	}
}
function mapStateToProps(state) {
	console.log('state',state)
	return {}
}
function mapDispatchToProps(dispatch) {
	return ({
		getPostValues: (posts) => {
			dispatch(getPostValues(posts));
		}
	})
}
export default connect(mapStateToProps, mapDispatchToProps)(ListBlog);
//export default ListBlog
