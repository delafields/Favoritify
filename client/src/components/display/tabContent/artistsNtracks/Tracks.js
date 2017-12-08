import React from 'react';
import Paper from 'material-ui/Paper';
import PopularityBar from './PopularityBar';

/* Generates top track list & avg track popularity bar */
export const Tracks = props => {
	const tracks = props.trackData;
	const popularity = props.avgTrackPopularity;

	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			position: 'relative'
		},
		list: {
			height: '500px',
			width: '80%',
			minWidth: '280px',
			display: 'flex',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap',
			overflowY: 'scroll',
			paddingBottom: '40px',
			marginBottom: '40px'
		},
		listItem: {
			width: '260px',
			minHeight: '70px',
			backgroundColor: 'black',
			margin: '10px'
		},
		trackName: {
			color: 'white',
			margin: '10px 10px 0 10px'
		},
		artistName: {
			color: 'white',
			marginLeft: '10px'
		},
		popularityBar: {
			height: '100px',
			marginBottom: '20px'
		},
		popularityBarHeader: {
			margin: '0',
			textAlign: 'center'
		}
		// Maybe
		/*
		fadeBox: {
			position: 'absolute',
			bottom: '0',
			height: '80px',
			width: '100%',
			background:
				'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
		}
		*/
	};

	return (
		<div style={styles.container}>
			<div style={styles.popularityBar}>
				{popularity ? (
					<div>
						<h5 style={styles.popularityBarHeader}>Avg Track Popularity</h5>
						<PopularityBar popularity={popularity} tabColor={props.tabColor} />
					</div>
				) : (
					<h1>Loading...</h1>
				)}
			</div>
			<div style={styles.list}>
				{tracks ? (
					tracks.map((track, idx) => (
						<Paper style={styles.listItem} key={idx} zDepth={3} rounded={false}>
							<h3 style={styles.trackName}>{track.trackName}</h3>
							<h6 style={styles.artistName}>By {track.artistName}</h6>
						</Paper>
					))
				) : (
					<h1> </h1>
				)}
			</div>
			<div style={styles.fadeBox} />
		</div>
	);
};

export default Tracks;
