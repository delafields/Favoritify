import React from 'react';
import { VictoryBar } from 'victory';

/* Generates a lil' loading bar based on avg artist popularity */
const PopularityBar = props => {
	const popularity = props.popularity;
	const tabColor = props.tabColor;

	return (
		<VictoryBar
			horizontal
			height={100}
			width={600}
			data={[
				{ x: 0, y: 100, width: 50 },
				{
					x: 0,
					y: popularity,
					width: 45,
					label: `${popularity}//100`
				}
			]}
			style={{
				data: {
					fill: d => (d.y === 100 ? 'white' : tabColor),
					stroke: d => (d.y === 100 ? 'black' : 'none'),
					fillOpacity: 1,
					strokeWidth: 5
				},
				labels: { fontSize: '20px', fontFamily: 'Lato, sans-serif' }
			}}
			animate={{
				duration: 2000,
				onLoad: { duration: 1000 }
			}}
		/>
	);
};

export default PopularityBar;
