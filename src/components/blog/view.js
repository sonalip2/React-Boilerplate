import React, { Component } from 'react'
import { getBlog } from '../../utils/api_calls';
import Loader from '../common/loader';
import Button from '../common/button';

export default class ViewBlog extends Component {

	state = {
		loading: true,
		blog: {},
	}

	async componentDidMount() {
		const { match: { params: { id } } } = this.props
		if (!id) this.goBack()

		try {
			const blog = await getBlog(id)
			this.setState({ blog, loading: false })
		} catch (e) {
			this.setState({ loading: false })
		}
	}

	goBack = () => {
		this.props.history.goBack()
	}

	navigateToEdit = (id) => {
		this.props.history.push(`/posts/${id}/update`)
	}

	render() {

		const { loading, blog } = this.state

		if (loading) {
			return <Loader />
		}

		return (
			<div>
				<Button onClick={() => this.navigateToEdit(blog.id)} >Edit</Button>
				<div>Body: {blog.title}</div>
				<div>Title: {blog.body}</div>
			</div>
		)
	}
}
