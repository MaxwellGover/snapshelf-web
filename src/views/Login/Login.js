import React, { Component } from 'react';
import SignIn from '~/views/Login/components/SignIn/SignIn';
import './Login.css';

class Login extends Component {
	render () {
		return (
			<div className="login-container container">
				<SignIn push={this.props.history.push}/>
			</div>
		);
	}
}

export default Login;