import React, { Component } from 'react'
import CreateEditBlog from '../../components/blog/create_edit';
import { addBlog } from '../../utils/api_calls';

export default class CreateBlog extends Component {
	render() {
		return (
			<CreateEditBlog submitBlog={addBlog} />
		)
	}
}
