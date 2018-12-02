import React, { Component } from 'react'
import Button from '../../components/common/button';

import Input from '../common/input';
import Loader from '../common/loader';

export default class CreateEditBlog extends Component {

	constructor(props) {
		super(props)

		this.isEdit = props.isEdit
		this.state = {
			users: [],
			id: props.id ? props.id : null,
			title: props.title ? props.title : '',
			body: props.body ? props.body : '',
			loading: false,
			errors: {},
		}
	}

	validate = () => {
		const errors = {}
		const { title } = this.state
		let isError = false
		if (title.trim().length <= 0) {
			errors.title = 'Please enter valid title'
			isError = true
		}

		this.setState({ errors })
		return isError
	}

	handleDrop = dropped => {
		this.setState({ image: dropped[0] })
	}

	clearInput = () => {
		this.setState({
			title: '',
			body: '',
		})
	}

	submit = async (e) => {
		e.preventDefault()
		if (this.validate()) {
			return
		}
		const data = { ...this.state }
		this.setState({ loading: true })

		try {
			await this.props.submitBlog(data, this.state.id)
			if (!this.isEdit) {
				this.clearInput()
			}
			this.setState({ loading: false })
		} catch (e) {
			this.setState({ loading: false })
			console.log('e', e)
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {

		const { loading, title, body, errors } = this.state
		console.log('update',this.state)
		if (loading) {
			return <Loader />
		}

		return <div>
			<form onSubmit={this.submit} >
				<div>
					<Input name="title" value={title} error={errors.title} placeholder="title" onChange={this.handleInputChange} />
				</div>
				<div>
					<textarea value={body} name="body" placeholder="body" onChange={this.handleInputChange} />
				</div>
				<div>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div >
	}
}
