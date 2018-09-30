import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { selectMessages } from '../selector';
import { registerRequesting } from '../actions';
import Message from '../../share/messages';
import './stylesForReg.css';

export class Register extends React.Component {
	render() {
		const { onSubmit, handleSubmit, messages } = this.props;
		return (
			<div>
				<div id="register-box">
					<div className="left">
						<h1>Sign up</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="container">
								<Field
									name="name"
									type="text"
									id="name"
									className="name"
									label="name"
									placeholder="Name"
									component="input"
								/>
								<Field
									name="email"
									type="text"
									id="email"
									className="email"
									label="Email"
									placeholder="Email"
									component="input"
								/>
								<Field
									name="userName"
									type="text"
									id="userName"
									className="userName"
									label="userName"
									placeholder="Username"
									component="input"
								/>
								<Field
									name="password"
									type="password"
									id="password"
									className="password"
									label="Password"
									placeholder="Password"
									component="input"
								/>
								<input type="submit" name="signup_submit" value="Sign me up" />
							</div>
						</form>
					</div>

					<div className="right">
						<span className="loginwith">
							Sign in with<br />social network
						</span>

						<button className="social-signin facebook">Log in with facebook</button>
						<button className="social-signin twitter">Log in with Twitter</button>
						<button className="social-signin google">Log in with Google+</button>
					</div>
					<div className="or">OR</div>
				</div>
				<div>{!!messages.length && <Message message={messages[0].body} />}</div>
			</div>
		);
	}
}

Register.propTypes = {
	handleSubmit: PropTypes.func,
	onSubmit: PropTypes.func,
	messages: PropTypes.array
};

export const mapStateToProps = (state) => ({
	messages: selectMessages(state)
});

export const mapDispatchToProps = (dispatch) => ({
	onSubmit: (value) => {
		if (value.hasOwnProperty('name', 'email', 'userName', 'password')) dispatch(registerRequesting(value));
		else alert('Please Fill All the Fields');
	}
});

export default reduxForm({
	form: 'register'
})(connect(mapStateToProps, mapDispatchToProps)(Register));
