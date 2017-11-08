import React, { Component } from 'react';
import OptionsForm from './OptionsForm';

class Options extends Component {
	render() {
		return (
			<div className="center-align">
				<h5>Options</h5>
				<hr />
				<OptionsForm />
				<button className="btn" href="/api/logout">
					logout
				</button>
			</div>
		);
	}
}

export default Options;
