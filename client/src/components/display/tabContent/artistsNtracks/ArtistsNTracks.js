import React from 'react';
import Paper from 'material-ui/Paper';

import Artists from './Artists';
import Tracks from './Tracks';

/* Contains the artist & track lists */
const ArtistsNTracks = props => {
	const styles = {
		title: {
			padding: '20px 0 0 20px'
		},
		contentWrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		}
	};

	return (
		<Paper zDepth={2} rounded={false}>
			<h1 style={styles.title}>Artists // Tracks</h1>
			<div style={styles.contentWrapper}>
				<Artists
					artistData={props.artistData}
					avgArtistPopularity={props.avgArtistPopularity}
					tabColor={props.tabColor}
				/>
				<Tracks
					trackData={props.trackData}
					avgTrackPopularity={props.avgTrackPopularity}
					tabColor={props.tabColor}
				/>
			</div>
		</Paper>
	);
};

export default ArtistsNTracks;
