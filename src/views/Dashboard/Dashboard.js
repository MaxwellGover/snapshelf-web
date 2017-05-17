import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DashNavContainer from './components/DashNav/DashNav';
import './Dashboard.css';

class Dashboard extends Component {
	render () {
		return (
			<div>
				<DashNavContainer push={this.props.history.push}/>
			</div>
		);
	}
}

export default Dashboard;