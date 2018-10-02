import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { selectMessages } from '../selector';
import Message from '../../share/messages';
import { loginRequesting } from '../actions';
import { Link } from 'react-router-dom';
import './stylesForLog.css';

export class Login extends React.Component {
	render() {
		const { onSubmit, handleSubmit, messages } = this.props;
		return (
			<div>
				<div id="login-box">
					<div className="left">
						<h1>Sign in</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="container">
								<Field
									name="email"
									type="text"
									id="email"
									className="email"
									label="Email"
									placeholder="Email"
									component="input"
								/>
								<div className="forgotPassword">
									<Link to="/forgotpassword"> Forgot Password?</Link>
								</div>
								<Field
									name="password"
									type="password"
									id="password"
									className="password"
									label="Password"
									placeholder="Password"
									component="input"
								/>
								<input type="submit" name="signin_submit" value="Sign me in" />
							</div>
						</form>
					</div>
				</div>
				<div className="link">
					Don't have a account with us?<Link to="/register"> Register Here !!</Link>
				</div>
				<div>{!!messages.length && <Message message={messages[0].body} />}</div>
			</div>
		);
	}
}

Login.propTypes = {
	handleSubmit: PropTypes.func,
	onSubmit: PropTypes.func,
	messages: PropTypes.array
};

const mapStateToProps = (state) => ({
	messages: selectMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (value) => {
		if (value.hasOwnProperty('email', 'password')) dispatch(loginRequesting(value));
		else alert('Please Fill All the Fields');
	}
});

export default reduxForm({
	form: 'login'
})(connect(mapStateToProps, mapDispatchToProps)(Login));
