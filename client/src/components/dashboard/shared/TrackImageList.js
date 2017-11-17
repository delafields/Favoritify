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
			width: '100%',
			height: '1200px',
			overflowY: 'auto'
		}
	};

	return (
		<div style={styles.root}>
			<GridList cols={2} cellHeight="auto" padding={10} style={styles.gridList}>
				{artists ? (
					artists.map(track => (
						<GridTile
							key={track.trackName}
							title={`${track.trackName} by ${track.artistName}`}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
							titlePosition="top"
							style={{ fontWeight: '300', maxHeight: '200' }}
						>
							<img
								src={track.trackImage}
								height={'100%'}
								width={'100%'}
								alt={track.trackName}
							/>
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
