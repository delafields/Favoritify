import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}
