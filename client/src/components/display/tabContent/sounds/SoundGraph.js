import React from 'react';
import {
	VictoryChart,
	VictoryTheme,
	VictoryPolarAxis,
	VictoryArea,
	VictoryScatter
} from 'victory';

/* Generates the sounds radar chart */
const SoundGraph = props => {
	const features = props.features;
	const tabColor = props.tabColor;

	const styles = {
		polarAxis: {
			axisLabel: { padding: 10, fill: 'white' },
			// This is the lines coming from the center
			axis: { stroke: 'none', opacity: 0.1 },
			// This is the outer circle
			grid: { stroke: 'none', strokeWidth: 0.25, opacity: 0.5 },
			// Hides the ticks
			tickLabels: { fill: 'none' }
		},
		innerHex: {
			data: {
				fill: 'white',
				fillOpacity: 0.33,
				strokeWidth: 0
			}
		},
		outerHex: {
			data: {
				fill: tabColor,
				fillOpacity: 0.8,
				strokeWidth: 1
			}
		},
		featureArea: {
			data: {
				fill: 'black',
				fillOpacity: 0.4,
				strokeWidth: 2
			}
		},
		centerDot: {
			data: {
				fill: tabColor,
				stroke: tabColor,
				strokeWidth: 0,
				fillOpacity: '0.2'
			}
		},
		featurePoints: {
			data: {
				fill: 'white',
				stroke: '#c43a31',
				strokeWidth: 2
			}
		}
	};

	return (
		<VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
			<VictoryArea data={[1, 1, 1, 1, 1, 1]} style={styles.outerHex} />
			<VictoryArea
				data={[0.8, 0.8, 0.8, 0.8, 0.8, 0.8]}
				style={styles.innerHex}
			/>
			<VictoryArea
				data={[0.6, 0.6, 0.6, 0.6, 0.6, 0.6]}
				style={styles.innerHex}
			/>
			<VictoryArea
				data={[0.4, 0.4, 0.4, 0.4, 0.4, 0.4]}
				style={styles.innerHex}
			/>
			<VictoryArea
				data={[0.2, 0.2, 0.2, 0.2, 0.2, 0.2]}
				style={styles.innerHex}
			/>
			<VictoryArea
				data={Object.values(features[1])}
				style={styles.featureArea}
			/>

			<VictoryScatter
				style={styles.featurePoints}
				size={4}
				data={Object.values(features[1])}
			/>

			<VictoryScatter style={styles.centerDot} size={2} data={[0, 0]} />

			{Object.keys(features[1]).map((key, i) => {
				return (
					<VictoryPolarAxis
						key={i}
						dependentAxis
						style={styles.polarAxis}
						labelPlacement="perpendicular"
						axisValue={i}
						label={key}
						tickValues={[0, 0.33, 0.66, 1]}
					/>
				);
			})}
		</VictoryChart>
	);
};

export default SoundGraph;
