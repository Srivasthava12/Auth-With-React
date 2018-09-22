import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../src/login';
import Register from '../src/register';

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</main>
		);
	}
}
