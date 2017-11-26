import React from 'react';
import ArtistImageList from '../shared/ArtistImageList';
import WordCloud from '../shared/WordCloud';
import Graph from '../shared/Graph';
import TrackImageList from '../shared/TrackImageList';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const StepContent = props => {
	const styles = {
		cardHeader: {
			titleStyle: {
				color: 'white',
				fontSize: '1.2em',
				textTransform: 'uppercase'
			},
			subtitleStyle: {
				fontWeight: 300,
				color: 'white'
			}
		},
		cardMedia: {
			backgroundColor: 'white'
		},
		h3: {
			color: 'black',
			textAlign: 'center',
			paddingTop: '10px'
		},
		leftContainer: {
			minWidth: '320px',
			width: '40%',
			marginTop: '20px'
		},
		rightContainer: {
			backgroundColor: 'white',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'space-between',
			minWidth: '320px',
			width: '50%',
			marginTop: '20px'
		},
		wrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			marginTop: '-20px'
		}
	};

	return (
		<div style={styles.wrapper}>
			<Card style={styles.leftContainer}>
				<CardHeader
					title="Top Genres"
					subtitle="Touch A Slice! Results are from your top artists."
					titleStyle={styles.cardHeader.titleStyle}
					subtitleStyle={styles.cardHeader.subtitleStyle}
				/>
				<CardMedia style={styles.cardMedia}>
					<Graph
						data={props.graphData}
						graphColor={props.graphColor}
						graphFill={props.graphFill}
					/>
				</CardMedia>
			</Card>

			<Paper zdepth={2} rounded={false} style={styles.rightContainer}>
				<Card>
					<CardHeader
						title="Top Artists"
						titleStyle={styles.cardHeader.titleStyle}
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardMedia expandable={true} style={styles.cardMedia}>
						<h3 style={styles.h3}>1 ➟ 20</h3>
						<ArtistImageList artists={props.artistImages} />
					</CardMedia>
				</Card>
				<Card>
					<CardHeader
						title="Top Tracks"
						titleStyle={styles.cardHeader.titleStyle}
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardMedia expandable={true} style={styles.cardMedia}>
						<h3 style={styles.h3}>1 ➟ 20</h3>
						<TrackImageList artists={props.trackImages} />
					</CardMedia>
				</Card>
				<Card>
					<CardHeader
						title="Extra Genres"
						subtitle=""
						titleStyle={styles.cardHeader.titleStyle}
						subtitleStyle={styles.cardHeader.subtitleStyle}
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardMedia expandable={true} style={styles.cardMedia}>
						<h3 style={styles.h3}>
							Spotify has > 1000 genre tags. Here are some of the more esoteric
							ones that showed up for you.
						</h3>
						<WordCloud
							tags={props.extraGenres}
							colorOptions={props.cloudColors}
						/>
					</CardMedia>
				</Card>
			</Paper>
		</div>
	);
};

export default StepContent;
