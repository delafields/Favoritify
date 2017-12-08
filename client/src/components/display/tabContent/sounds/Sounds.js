import React from 'react';
import Paper from 'material-ui/Paper';
import { VictoryAxis } from 'victory';
import SoundGraph from './SoundGraph';
import TempoBars from './TempoBars';
import LoudnessBars from './LoudnessBars';
import FeatureDescriptions from './FeatureDescriptions';

/* Container that houses the 'sounds' of the top tracks */
const Sounds = props => {
	let features = props.audioFeatures;

	const styles = {
		container: {
			minHeight: '700px',
			backgroundColor: 'black'
		},
		title: {
			padding: '20px 0 0 20px',
			color: 'white'
		},
		contentWrapper: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
		leftContainer: {
			width: '50%',
			minWidth: '320px',
			display: 'flex',
			alignItems: 'center'
		},
		rightContainer: {
			width: '50%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			minWidth: '320px'
		},
		loudnessBarContainer: {
			display: 'flex',
			alignItems: 'flex-end'
		},
		tempoBarContainer: {
			display: 'flex',
			alignItems: 'flex-end',
			marginBottom: '20px'
		},
		barTitle: {
			marginTop: '20px',
			color: 'white'
		},
		decibelSVG: {
			marginLeft: '-10px'
		},
		decibelAxis: {
			axisLabel: {
				fontFamily: 'Lato, sans-serif',
				fontSize: 14,
				padding: 45,
				fill: 'white'
			},
			axis: { stroke: 'white' },
			ticks: { stroke: 'white', size: 5 },
			tickLabels: { fontFamily: 'Lato, sans-serif', fill: 'white' }
		}
	};

	return (
		<Paper style={styles.container}>
			<h1 style={styles.title}>Sounds</h1>
			{features ? (
				<div style={styles.contentWrapper}>
					<div style={styles.leftContainer}>
						<SoundGraph features={features} tabColor={props.tabColor} />
					</div>
					<div style={styles.rightContainer}>
						<h2 style={styles.title}>Descriptions</h2>
						<FeatureDescriptions />
						<h2 style={styles.barTitle}>Loudness</h2>
						<div style={styles.loudnessBarContainer}>
							<LoudnessBars
								loudness={features[0].loudness}
								tabColor={props.tabColor}
							/>
							<svg width={70} height={160} style={styles.decibelSVG}>
								<VictoryAxis
									dependentAxis
									crossAxis
									label="Decibels"
									orientation="right"
									width={70}
									height={220}
									domain={[0, -60]}
									offsetX={60}
									standalone={false}
									style={styles.decibelAxis}
								/>
							</svg>
						</div>
						<h2 style={styles.barTitle}>Tempo</h2>
						<div style={styles.tempoBarContainer}>
							<TempoBars
								tempo={features[0].tempo}
								tempoName={features[0].tempoName}
								tabColor={props.tabColor}
							/>
							<svg width={70} height={160} style={styles.decibelSVG}>
								<VictoryAxis
									dependentAxis
									crossAxis
									label="BPM"
									orientation="right"
									width={70}
									height={220}
									domain={[0, 200]}
									offsetX={60}
									standalone={false}
									style={styles.decibelAxis}
								/>
							</svg>
						</div>
					</div>
				</div>
			) : (
				<h1> </h1>
			)}
		</Paper>
	);
};

export default Sounds;
