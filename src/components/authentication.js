import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loader from './common/loader';
import { getToken } from '../utils/auth';

export default class Authentication extends Component {

	state = {
		loading: true,
		isLoggedin: false,
	}

	async componentDidMount() {
		const token = getToken()
		if (token) {
			this.setState({ isLoggedin: true, loading: false })
		} else {
			this.setState({ isLoggedin: false, loading: false })
		}
	}

	render() {
		if (this.state.loading) {
			return <Loader />
		}

		if (!this.state.isLoggedin) {
			return <Redirect to={{
				pathname: '/login',
				state: { from: this.props.location }
			  }} />
		}

		return <div>{this.props.children}</div>
	}
}
