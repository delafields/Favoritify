import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const ArtistImageList = props => {
	const artists = props.artists;

	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'
		},
		gridList: {
			width: '100%',
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
					artists.map(artist => (
						<GridTile
							style={styles.gridTile}
							key={artist.artistName}
							title={artist.artistName}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
							titlePosition="top"
						>
							<img src={artist.artistImage} alt={artist.artistName} />
						</GridTile>
					))
				) : (
					<h1>Whoops, there's been an error! Try refreshing the page.</h1>
				)}
			</GridList>
		</div>
	);
};

export default ArtistImageList;
