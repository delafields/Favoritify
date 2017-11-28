import React from 'react';

import ArtistList from './shared/ArtistList';
import WordCloud from './shared/WordCloud';
import Graph from './shared/Graph';
import TrackList from './shared/TrackList';
import MyCard from './shared/MyCard';

const StepContent = props => {
	const styles = {
		wrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			marginBottom: '10px'
		},
		leftContainer: {
			width: '40%',
			minWidth: '320px',
			maxWidth: '425px',
			marginTop: '20px'
		},
		rightContainer: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'space-between',
			width: '50%',
			minWidth: '320px',
			marginTop: '20px'
		}
	};

	return (
		<div style={styles.wrapper}>
			<div style={styles.leftContainer}>
				<MyCard
					title="Top Genres"
					subtitle="Touch A Slice! Results are from your top artists."
				>
					<Graph
						data={props.graphData}
						graphColor={props.graphColor}
						graphFill={props.graphFill}
					/>
				</MyCard>
			</div>

			<div style={styles.rightContainer}>
				<MyCard title="Top Artists" text="1 ➟ 20" expand={true}>
					<ArtistList artists={props.artistImages} />
				</MyCard>
				<MyCard title="Top Tracks" text="1 ➟ 20" expand={true}>
					<TrackList artists={props.trackImages} />
				</MyCard>
				<MyCard
					title="Extra Genres"
					text="Spotify has > 1000 genre tags. Here are some of the more esoteric
					ones that showed up for you."
					expand={true}
				>
					<WordCloud
						tags={props.extraGenres}
						colorOptions={props.cloudColors}
					/>
				</MyCard>
			</div>
		</div>
	);
};

export default StepContent;
