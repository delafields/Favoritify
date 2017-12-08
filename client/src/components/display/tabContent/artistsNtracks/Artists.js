import React from 'react';
import Paper from 'material-ui/Paper';
import PopularityBar from './PopularityBar';

/* Generates the popularity bar & list of top artists */
const Artists = props => {
	const artists = props.artistData;
	const popularity = props.avgArtistPopularity;

	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			position: 'relative',
			marginBottom: '40px'
		},
		list: {
			height: '500px',
			width: '80%',
			minWidth: '280px',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflowY: 'scroll',
			paddingBottom: '60px'
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
			maxWidth: '500px',
			marginRight: '10%',
			marginLeft: '10%'
		},
		popularityBarHeader: {
			margin: '0',
			textAlign: 'center'
		}
		/* Maybe
		fadeBox: {
			position: 'absolute',
			bottom: '0',
			height: '100px',
			width: '100%',
			background:
				'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1))'
		}
		*/
	};

	return (
		<div style={styles.container}>
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
			<div style={styles.list}>
				{artists ? (
					artists.map(artist => (
						<div style={styles.listItem} key={artist.artistName}>
							<img
								src={artist.artistImage}
								alt={artist.artistName}
								style={styles.artistImage}
							/>
							<Paper zDepth={3} rounded={false} style={styles.listItemContent}>
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
			<div style={styles.fadeBox} />
		</div>
	);
};

export default Artists;
