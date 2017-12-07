import React from 'react';
import Paper from 'material-ui/Paper';
import PopularityBar from './PopularityBar';

/* Generates the popularity bar & list of top artists */
const Artists = props => {
	const artists = props.artistData;
	const popularity = props.avgArtistPopularity;

	const styles = {
		list: {
			height: '500px',
			width: '70%',
			minWidth: '320px',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflowY: 'scroll',
			marginBottom: '40px'
		},
		listItem: {
			width: '200px',
			margin: '20px',
			height: '150px'
		},
		listItemContent: {
			backgroundColor: 'black',
			position: 'relative',
			bottom: '60px',
			minHeight: '80px',
			width: '200px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		artistImage: {
			width: '120px',
			height: '120px',
			position: 'relative',
			right: '20px',
			bottom: '20px',
			zIndex: '2'
		},
		artistName: {
			margin: '0 0 0 20px',
			color: 'white',
			zIndex: '10',
			overflowWrap: 'break-word'
		},
		popularity: {
			margin: '5px 0 5px 20px',
			color: 'white'
		},
		popularityBar: {
			height: '100px',
			width: '80%',
			minWidth: '300px',
			marginRight: '20%',
			marginLeft: '20%',
			marginBottom: '20px'
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
						<h5 style={styles.popularityBarHeader}>Avg Artist Popularity</h5>
						<PopularityBar popularity={popularity} tabColor={props.tabColor} />
					</div>
				) : (
					<h1>Loading...</h1>
				)}
			</div>
			{artists ? (
				artists.map(artist => (
					<div style={styles.listItem} key={artist.artistName}>
						<img
							src={artist.artistImage}
							alt={artist.artistName}
							style={styles.artistImage}
						/>
						<Paper zDepth={2} rounded={false} style={styles.listItemContent}>
							<h3 style={styles.artistName}>{artist.artistName}</h3>
							<h6 style={styles.popularity}>
								Popularity: {artist.artistPopularity}
							</h6>
						</Paper>
					</div>
				))
			) : (
				<h1> </h1>
			)}
		</div>
	);
};

export default Artists;
