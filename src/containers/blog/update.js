import React, { Component } from 'react'
import CreateEditBlog from '../../components/blog/create_edit';
import { updateBlog, getBlog } from '../../utils/api_calls';
import Loader from '../../components/common/loader';

export default class UpdateBlog extends Component {

	state = {
		blog: {},
		loading: true,
	}

	goBack() {
		this.props.history.goBack();
	}

	async componentDidMount() {
		const { match: { params: { id } } } = this.props
		if (!id) this.goBack()

		try {
			const blog = await getBlog(id)
			this.setState({ blog, loading: false })
		} catch (e) {
			this.goBack()
			this.setState({ loading: false })
		}
	}

	render() {
		const { loading, blog } = this.state
		if (loading) {
			return (
				<Loader />
			)
		}

		return (
			<CreateEditBlog submitBlog={updateBlog} {...blog} isEdit={true} />
		)
	}
}
