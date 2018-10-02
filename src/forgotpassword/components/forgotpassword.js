import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { selectMessages } from '../selector';
import { requestingForgotPassword } from '../actions';
import Message from '../../share/messages';
import './StylesForForgotPassword.css';

export class forgotpassword extends Component {
	render() {
		const { onSubmit, handleSubmit, messages } = this.props;
		return (
			<div>
				<div id="forgotPassword-box">
					<div className="fields">
						<h1>Enter Email</h1>
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
								<input type="submit" name="email_submit" value="Submit Email" />
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
		if (value.hasOwnProperty('email')) dispatch(requestingForgotPassword(value));
		else alert('Please Fill  the Fields');
	}
});
export default reduxForm({
	form: 'forgotpassword'
})(connect(mapStateToProps, mapDispatchToProps)(forgotpassword));
