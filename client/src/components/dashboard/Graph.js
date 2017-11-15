import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import {
	purpleA100,
	purpleA200,
	purpleA400,
	purpleA700,
	deepPurpleA100,
	deepPurpleA200,
	deepPurpleA400,
	deepPurpleA700,
	indigoA100,
	indigoA200,
	indigoA400,
	indigoA700,
	blueA100,
	blueA200,
	blueA400,
	blueA700
} from 'material-ui/styles/colors';

const pieCellColors = [
	purpleA100,
	purpleA200,
	purpleA400,
	purpleA700,
	deepPurpleA100,
	deepPurpleA200,
	deepPurpleA400,
	deepPurpleA700,
	indigoA100,
	indigoA200,
	indigoA400,
	indigoA700,
	blueA100,
	blueA200,
	blueA400,
	blueA700
];

const Graph = props => {
	return (
		<PieChart width={800} height={400}>
			<Pie
				data={props.data}
				cx={500}
				cy={200}
				innerRadius={50}
				outerRadius={80}
				fill="#82ca9d"
				dataKey="count"
			/>
			<Pie
				data={props.data}
				cx={500}
				cy={200}
				innerRadius={40}
				outerRadius={80}
				fill="#82ca9d"
				dataKey="count"
			>
				{props.data.map((entry, index) => (
					<Cell fill={pieCellColors[index % pieCellColors.length]} />
				))}
			</Pie>
			<Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
		</PieChart>
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
