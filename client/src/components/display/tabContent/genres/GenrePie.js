import React from 'react';
import { VictoryPie, VictoryTooltip, VictoryLabel } from 'victory';

/* Generates the genre pie graph */
const GenrePie = props => {
	const styles = {
		tooltip: {
			fontSize: 20,
			fontWeight: 400,
			fontFamily: 'Lato, sans-serif',
			textTransform: 'capitalize',
			fill: 'white'
		},
		flyout: {
			fill: 'black',
			stroke: 'white'
		},
		sliceLabel: {
			fontSize: 20,
			fontFamily: 'Lato, sans-serif'
		},
		sliceLabelSubtitle: {
			fontSize: 12,
			fontFamily: 'Lato, sans-serif'
		}
	};

	return (
		<svg viewBox="0 0 400 400">
			<VictoryLabel
				textAnchor="middle"
				style={styles.sliceLabel}
				x={200}
				y={190}
				text="Touch a slice!"
			/>
			<VictoryLabel
				textAnchor="middle"
				style={styles.sliceLabelSubtitle}
				x={200}
				y={210}
				text="# of times they showed up for you"
			/>
			<VictoryPie
				data={props.data}
				x="name"
				y="count"
				standalone={false}
				colorScale={props.graphColor}
				innerRadius={200}
				labelRadius={120}
				padAngle={1}
				labels={({ name, count }) => `${name}: ${count}`}
				labelComponent={
					<VictoryTooltip
						height={250}
						width={250}
						x={200}
						y={325}
						orientation="top"
						pointerLength={0}
						cornerRadius={125}
						style={styles.tooltip}
						flyoutStyle={styles.flyout}
						flyoutComponent={
							<g>
								<circle
									cx={200}
									cy={200}
									r="120"
									stroke="tomato"
									fill="black"
								/>
								<circle cx={200} cy={200} r="125" stroke="orange" fill="none" />
								<circle cx={200} cy={200} r="130" stroke="gold" fill="none" />
							</g>
						}
					/>
				}
			/>
		</svg>
	);
};

export default GenrePie;
