import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const TrackImageList = props => {
	const artists = props.artists;

	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'
		},
		gridList: {
			display: 'flex',
			flexWrap: 'nowrap',
			overflowX: 'auto'
		},
		gridTile: {
			fontWeight: '300'
		}
	};

	return (
		<div style={styles.root}>
			<GridList cols={2.2} style={styles.gridList}>
				{artists ? (
					artists.map(track => (
						<GridTile
							key={track.trackName}
							title={`${track.trackName} by ${track.artistName}`}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
							titlePosition="top"
							style={styles.gridTile}
						>
							<img src={track.trackImage} alt={track.trackName} />
						</GridTile>
					))
				) : (
					<h1>Refresh the page</h1>
				)}
			</GridList>
		</div>
	);
};

export default TrackImageList;
