import React from 'react';
import Avatar from 'material-ui/Avatar';
import { GridList, GridTile } from 'material-ui/GridList';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import ReactTooltip from 'react-tooltip';

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
			height: '1000px',
			overflowY: 'auto'
		}
	};

	return (
		<div style={styles.root}>
			<GridList cols={2} cellHeight="auto" padding={10} style={styles.gridList}>
				{artists.map(artist => (
					<GridTile
						key={artist.artistName}
						title={artist.artistName}
						titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
						titlePosition="top"
						style={{ fontWeight: '300', maxHeight: '200' }}
					>
						<img
							src={artist.artistImage}
							height={'100%'}
							width={'100%'}
							alt={artist.artistName}
						/>
					</GridTile>
				))}
			</GridList>
		</div>
	);
};

export default ArtistImageList;
