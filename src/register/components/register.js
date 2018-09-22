import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { selectMessages, selectErrors } from '../selector';
import { registerRequesting } from '../actions';
export class Register extends React.Component {
	render() {
		const { onSubmit, handleSubmit, messages, errors } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Signup</h1>
					<label htmlFor="name">Name</label>
					<Field name="name" type="text" id="name" className="name" label="name" component="input" />
					<label htmlFor="email">Email</label>
					<Field name="email" type="text" id="email" className="email" label="Email" component="input" />
					<label htmlFor="userName">UserName</label>
					<Field
						name="userName"
						type="text"
						id="userName"
						className="userName"
						label="userName"
						component="input"
					/>
					<label htmlFor="password">Password</label>
					<Field
						name="password"
						type="password"
						id="password"
						className="password"
						label="Password"
						component="input"
					/>
					<button action="submit">Register</button>
				</form>
				<div>{!!messages.length && <h1>{messages[0].body}</h1>}</div>
			</div>
		);
	}
}

Register.propTypes = {
	handleSubmit: PropTypes.func,
	onSubmit: PropTypes.func,
	messages: PropTypes.array,
	errors: PropTypes.array
};

export const mapStateToProps = (state) => ({
	messages: selectMessages(state),
	errors: selectErrors(state)
});

export const mapDispatchToProps = (dispatch) => ({
	onSubmit: (value) => {
		console.log('value :', value);
		dispatch(registerRequesting(value));
	}
});

export default reduxForm({
	form: 'register'
})(connect(mapStateToProps, mapDispatchToProps)(Register));
