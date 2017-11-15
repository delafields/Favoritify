import React from 'react';
import Avatar from 'material-ui/Avatar';
//import List from 'material-ui/List/List';
//import ListItem from 'material-ui/List/ListItem';
import { GridList, GridTile } from 'material-ui/GridList';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import ReactTooltip from 'react-tooltip';

const Avatars = props => {
	const artists = props.artists;

	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'
		},
		gridList: {
			width: '100%',
			height: 450,
			overflowY: 'auto'
		}
	};

	return (
		<Card style={{ textAlign: 'center' }}>
			<CardHeader
				title="YOUR TOP 20 ARTISTS"
				titleStyle={{ fontSize: '2em', fontWeight: 300, color: 'white' }}
			/>
			<CardMedia>
				<div style={styles.root}>
					<GridList cols={4} cellHeight={200} style={styles.gridList}>
						{artists.map(artist => (
							<GridTile key={artist.artistName}>
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
			</CardMedia>
		</Card>
	);
};

export default Avatars;
