import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../src/login';
import Register from '../src/register';
import Profile from '../src/profile'
import { isLoggedIn } from './helpers/check-auth';

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/login" render={() => (isLoggedIn() ? <Redirect to="/profile" /> : <Login />)} />
					<Route exact path="/profile" render={() => (isLoggedIn() ? <Profile />: <Redirect to="/login" />)} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</main>
		);
	}
}
