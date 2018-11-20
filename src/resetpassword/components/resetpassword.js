import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { selectMessages } from '../selector';
import { requestingResetPassword } from '../actions';
import Message from '../../share/messages';
import './StylesForResetPassword.css';

export class resetpassword extends Component {
	render() {
		const { onSubmit, handleSubmit, messages } = this.props;
		return (
			<div>
				<div id="resetPassword-box">
					<div className="fields">
						<h1>Reset Password</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="container">
								<Field
									name="newPassword"
									type="password"
									id="newPassword"
									className="newPassword"
									label="newPassword"
									placeholder="New-Password"
									component="input"
								/>
								<Field
									name="Confirm Password"
									type="password"
									id="confirmPassword"
									className="confrimPassword"
									label="confrimPassword"
									placeholder="Confrim-Password"
									component="input"
								/>
								<input type="submit" name="password_submit" value="Submit Password" />
							</div>
						</form>
					</div>
				</div>
				<div>{!!messages.length && <Message message={messages[0].body} />}</div>
			</div>
		);
	}
}

resetpassword.propTypes = {
	handleSubmit: PropTypes.func,
	onSubmit: PropTypes.func,
	messages: PropTypes.array
};

const mapStateToProps = (state) => ({
	messages: selectMessages(state)
});

export const mapDispatchToProps = (dispatch) => ({
	onSubmit: (value) => {
		if (value.newPassword && value.confrimPassword) dispatch(requestingResetPassword(value));
		else alert('Please Fill  the Fields');
	}
});
export default reduxForm({
	form: 'resetpassword'
})(connect(mapStateToProps, mapDispatchToProps)(resetpassword));
