import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { blueGrey900, indigoA700, purpleA400 } from 'material-ui/styles/colors';

import ArtistsTab from './dashboard/Artists/ArtistsTab';
import TracksTab from './dashboard/Tracks/TracksTab';

class Display extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<AppBar
					title="WHAT KIND OF MUSIC DO YOU LIKE?"
					titleStyle={{
						textAlign: 'center',
						color: 'white',
						fontWeight: '300'
					}}
					showMenuIconButton={false}
					style={{ backgroundColor: blueGrey900 }}
					iconElementRight={<RaisedButton label="logout" href="/api/logout" />}
				/>
				<Tabs inkBarStyle={{ background: 'white' }}>
					<Tab
						label={<span style={{ color: 'white' }}>Artists</span>}
						style={{ backgroundColor: indigoA700 }}
					>
						<ArtistsTab />
					</Tab>
					<Tab
						label={<span style={{ color: 'white' }}>Tracks</span>}
						style={{
							backgroundColor: purpleA400
						}}
					>
						<TracksTab />
					</Tab>
				</Tabs>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Display);
