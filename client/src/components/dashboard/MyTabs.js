import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import {
	blueGrey900,
	indigoA700,
	purpleA400,
	deepPurpleA700
} from 'material-ui/styles/colors';

const MyTabs = props => {
	const styles = {
		inkBar: {
			background: blueGrey900,
			height: '3px'
		},
		label: {
			fontWeight: '300',
			fontSize: '12px'
		}
	};

	const myTabs = [
		{
			value: 0,
			name: 'Short Term',
			time: '(4 weeks)',
			color: indigoA700
		},
		{
			value: 1,
			name: 'Medium Term',
			time: '(6 Months)',
			color: deepPurpleA700
		},
		{
			value: 2,
			name: 'Long Term',
			time: '(Several Years)',
			color: purpleA400
		}
	];

	return (
		<Tabs
			onChange={props.onChange}
			value={props.value}
			inkBarStyle={styles.inkBar}
		>
			{myTabs.map(tab => (
				<Tab
					key={tab.name}
					style={{ backgroundColor: tab.color }}
					label={
						<span>
							{tab.name}
							<br />
							<span style={styles.label}>{tab.time}</span>
						</span>
					}
					value={tab.value}
				/>
			))}
		</Tabs>
	);
};

export default MyTabs;
