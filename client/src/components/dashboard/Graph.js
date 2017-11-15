import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Graph = props => {
	/*const style = {
		top: 0,
		left: 350,
		lineHeight: '24px'
	};*/

	return (
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
			<Bar dataKey="count" fill="#8884d8" />
		</BarChart>
	);
};

export default Graph;
