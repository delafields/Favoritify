import React from 'react';
import {
	PieChart,
	Pie,
	Legend,
	Tooltip,
	Cell,
	ResponsiveContainer
} from 'recharts';
import randomMC from 'random-material-color';

const Graph = props => {
	return (
		<ResponsiveContainer minHeight={600} width="100%">
			<PieChart>
				<Pie
					data={props.data}
					innerRadius={150}
					outerRadius={240}
					cy={300}
					paddingAngle={1}
					fill="#82ca9d"
					dataKey="count"
				>
					{props.data.map((entry, index) => (
						<Cell
							fill={randomMC.getColor({
								shades: ['A400', 'A700']
							})}
						/>
						//<Cell fill={pieCellColors[index % pieCellColors.length]} />
					))}
				</Pie>
				<Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
			</PieChart>
		</ResponsiveContainer>
	);
};

/* SIMPLE BAR CHART
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend
} from 'recharts';

const Graph = props => {

	return (
		<ResponsiveContainer width={700} height={400}>
			<BarChart
				width={600}
				height={300}
				data={props.data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="count" fill={purpleA400} />
			</BarChart>
		</ResponsiveContainer>
	);
};
*/

export default Graph;
