import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { selectMessages } from '../selector';
import { requestingChangePassword } from '../actions';
import Message from '../../share/messages';
import './StylesForChangePassword.css';

export class forgotpassword extends Component {
	render() {
		const { onSubmit, handleSubmit, messages } = this.props;
		return (
			<div>
				<div id="changePassword-box">
					<div className="fields">
						<h1>Change Password</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="container">
								<Field
									name="oldPassword"
									type="password"
									id="oldPassword"
									className="oldPassword"
									label="oldPassword"
									placeholder="Old-Password"
									component="input"
								/>
								<Field
									name="newPassword"
									type="password"
									id="newPassword"
									className="newPassword"
									label="newPassword"
									placeholder="New-Password"
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

forgotpassword.propTypes = {
	handleSubmit: PropTypes.func,
	onSubmit: PropTypes.func,
	messages: PropTypes.array
};

const mapStateToProps = (state) => ({
	messages: selectMessages(state)
});

export const mapDispatchToProps = (dispatch) => ({
	onSubmit: (value) => {
		if (value.newPassword && value.oldPassword) dispatch(requestingChangePassword(value));
		else alert('Please Fill  the Fields');
	}
});
export default reduxForm({
	form: 'forgotpassword'
})(connect(mapStateToProps, mapDispatchToProps)(forgotpassword));
