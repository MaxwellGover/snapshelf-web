import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fbAuth } from '~/config/firebase/firebaseConfig';

DashNav.propTypes = {
  signOut: PropTypes.func.isRequired
}

function DashNav (props) {
  return (
	<nav className="navbar navbar-light bg-faded">
 	  <a className="navbar-brand" href="#">Store Name</a>
 	  <button className="btn btn-default" onClick={props.signOut}>Logout</button>
	</nav>
  );
}

class DashNavContainer extends Component {
  static PropTypes = {
  	push: PropTypes.func.isRequired
  }
  signOut = () => {
  	console.log('Sign out');
  	fbAuth.signOut().then(() => {
  	  // Sign-out successful.
  	  this.props.push('/');

	}).catch((error) => {
  	  // An error happened.
    });
  }
  render () {
  	return (
  	  <DashNav signOut={this.signOut} push={this.props.push}/>
  	);
  }
}

export default DashNavContainer;