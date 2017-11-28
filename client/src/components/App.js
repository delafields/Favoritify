import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Display from './Display';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Display} />
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}
