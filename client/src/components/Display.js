import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FlatButton from 'material-ui/RaisedButton';
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
		const styles = {
			appBar: {
				title: {
					textAlign: 'center',
					color: 'white',
					fontWeight: '300'
				},
				background: {
					backgroundColor: blueGrey900
				},
				button: {
					marginTop: '10px'
				}
			},
			tabs: {
				inkBar: {
					background: blueGrey900
				},
				label: {
					color: 'white'
				},
				artistsTab: {
					backgroundColor: indigoA700
				},
				tracksTab: {
					backgroundColor: purpleA400
				}
			}
		};

		return (
			<div>
				<AppBar
					title="WHAT KIND OF MUSIC DO YOU LIKE?"
					titleStyle={styles.appBar.title}
					style={styles.appBar.background}
					iconElementLeft={<h4>{this.props.auth.spotifyID} </h4>}
					iconElementRight={
						<FlatButton
							style={styles.appBar.button}
							label="logout"
							href="/api/logout"
						/>
					}
				/>
				<Tabs inkBarStyle={styles.tabs.inkBar}>
					<Tab
						label={<span style={styles.tabs.label}>Artists</span>}
						style={styles.tabs.artistsTab}
					>
						<ArtistsTab />
					</Tab>
					<Tab
						label={<span style={styles.tabs.label}>Tracks</span>}
						style={styles.tabs.tracksTab}
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
