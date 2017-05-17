import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fbAuth, db } from '~/config/firebase/firebaseConfig';
import { getId, getRetailerData } from '~/redux/modules/retailer';
import { authUser } from '~/redux/modules/authentication';

class SignIn extends Component {
  static propTypes = {
  	dispatch: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    
    this.state = {
    	email: '',
    	password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange (event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }
  handleSubmit (event) {
    event.preventDefault();
    
    const email = this.state.email;
    const password = this.state.password;
    // Register user 
    fbAuth.signInWithEmailAndPassword(email, password)
    	.catch((error) => {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			console.log(errorMessage);
 	 		// ...
		})
		.then(() => {
			const user = fbAuth.currentUser;
      console.log(user);
      this.props.dispatch(authUser());
      this.props.dispatch(getId(user.uid));
      this.props.dispatch(getRetailerData());
      this.props.push(`/dashboard`);
		})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            onChange={this.handlePasswordChange}
          />
        </div>
        <button className="btn btn-default" type="submit">Continue</button>
      </form>
    );
  }
}

export default connect()(SignIn);