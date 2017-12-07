import React from 'react';
import Paper from 'material-ui/Paper';
import PopularityBar from './PopularityBar';

/* Generates top track list & avg track popularity bar */
export const Tracks = props => {
	const tracks = props.trackData;
	const popularity = props.avgTrackPopularity;

	const styles = {
		list: {
			height: '500px',
			width: '30%',
			minWidth: '320px',
			display: 'flex',
			flexDirection: 'column',
			overflowY: 'scroll',
			marginBottom: '40px'
		},
		listItem: {
			width: 'auto',
			minHeight: '100px',
			overflow: 'auto',
			margin: '20px',
			backgroundColor: 'black'
		},
		trackName: {
			color: 'white',
			margin: '10px 0 0 10px'
		},
		artistName: {
			color: 'white',
			marginLeft: '10px'
		},
		popularityBar: {
			height: '100px'
		},
		popularityBarHeader: {
			margin: '0',
			textAlign: 'center'
		}
	};

	return (
		<div style={styles.list}>
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
			{tracks ? (
				tracks.map((track, idx) => (
					<Paper style={styles.listItem} key={idx} zDepth={2} rounded={false}>
						<h3 style={styles.trackName}>{track.trackName}</h3>
						<h6 style={styles.artistName}>By {track.artistName}</h6>
					</Paper>
				))
			) : (
				<h1> </h1>
			)}
		</div>
	);
};

export default Tracks;
