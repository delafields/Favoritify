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
		},
		title: {
			wordWrap: 'break-word',
			whiteSpace: 'normal'
		}
	};

	return (
		<div style={styles.root}>
			<GridList cols={2.2} style={styles.gridList}>
				{artists ? (
					artists.map(track => (
						<GridTile
							key={track.trackName}
							style={styles.gridTile}
							title={track.trackName}
							titleStyle={styles.title}
							titlePosition="top"
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
							subtitle={
								<span>
									by <b>{track.artistName}</b>
								</span>
							}
						>
							<img src={track.trackImage} alt={track.trackName} />
						</GridTile>
					))
				) : (
					<h1>Whoops, there's been an error! Try refreshing the page.</h1>
				)}
			</GridList>
		</div>
	);
};

export default TrackImageList;
