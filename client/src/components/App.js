import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Landing} />
					<Route exact path="/dashboard" component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}
