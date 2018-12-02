import React, { Component } from 'react'

import Input from '../../components/common/input';
import { login } from '../../utils/api_calls';
import Loader from '../../components/common/loader';
import Button from '../../components/common/button';
import { doLogin } from '../../utils/auth';

export default class MobileVerify extends Component {

	state = {
		username: '',
		password: '',
		loading: false,
		errors: {},
	}

	validate = () => {
		const errors = {}
		const { username, password } = this.state
		let isError = false
		if (username.trim().length <= 0) {
			errors.title = 'Please enter valid username'
			isError = true
		}

		if (password.trim().length <= 0) {
			errors.password = 'Please enter valid password'
			isError = true
		}

		this.setState({ errors })
		return isError
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submit = async (e) => {
		e.preventDefault()
		if (this.validate()) {
			return
		}
		const { username, password } = this.state

		this.setState({ loading: true })

		try {
			//await login({ username, password })
			await doLogin({
				token: 'some_token',
				user: {
					id: 'id',
				}
			})
			this.setState({ loading: false })
			this.props.history.push({
				pathname: '/',
				state: { username, password }
			})
		} catch (e) {
			this.setState({ loading: false })
		}
	}

	render() {
		const { username, password, loading, errors } = this.state

		if (loading) return <Loader />

		return <div className="login-container">
			<form onSubmit={this.submit}>
				<div>
					<Input name="username" value={username} error={errors.username} placeholder="username" onChange={this.handleInputChange} />
				</div>
				<div>
					<Input value={password} name="password" type="password" error={errors.password} placeholder="password" onChange={this.handleInputChange} />
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</div >
	}
}
