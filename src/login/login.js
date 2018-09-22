import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Login extends Component {

	render() {
		const {} = this.props
		return (
			<div>
				<h1>Login</h1>
			</div>
		);
	}
}

Login.propTypes = {}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
