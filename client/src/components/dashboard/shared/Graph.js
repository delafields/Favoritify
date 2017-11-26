import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

const Graph = props => {
	const styles = {
		pieAnimation: {
			duration: 2000,
			easing: 'bounce'
		},
		tooltip: {
			fontSize: 12,
			fontWeight: 400,
			padding: 2,
			fontFamily: 'Lato, sans-serif',
			textTransform: 'capitalize',
			fill: 'white'
		},
		flyout: {
			fill: props.graphFill,
			stroke: 'white'
		}
	};

	return (
		<div>
			<VictoryPie
				data={props.data}
				animate={styles.pieAnimation}
				x="name"
				y="count"
				colorScale={props.graphColor}
				innerRadius={100}
				labelRadius={120}
				padAngle={1}
				labels={d => `${d.name}: ${d.count}`}
				labelComponent={
					<VictoryTooltip
						x={200}
						y={275}
						orientation="top"
						pointerLength={0}
						cornerRadius={75}
						width={150}
						height={150}
						flyoutStyle={styles.flyout}
						style={styles.tooltip}
					/>
				}
			/>
		</div>
	);
};

export default Graph;
