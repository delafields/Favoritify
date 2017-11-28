import React from 'react';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { blueGrey900 } from 'material-ui/styles/colors';

const MyCard = props => {
	const styles = {
		card: {
			marginBottom: '20px'
		},
		cardHeader: {
			main: {
				backgroundColor: blueGrey900
			},
			titleStyle: {
				color: 'white',
				fontSize: '1.2em',
				textTransform: 'uppercase'
			},
			subtitleStyle: {
				fontWeight: 300,
				color: 'white'
			},
			icon: {
				color: 'white'
			}
		},
		cardMedia: {
			backgroundColor: 'white'
		},
		h3: {
			color: 'black',
			textAlign: 'center',
			paddingTop: '10px'
		}
	};

	return (
		<Card style={styles.card}>
			<CardHeader
				style={styles.cardHeader.main}
				title={props.title}
				titleStyle={styles.cardHeader.titleStyle}
				subtitle={props.subtitle}
				subtitleStyle={styles.cardHeader.subtitleStyle}
				iconStyle={styles.cardHeader.icon}
				actAsExpander={props.expand}
				showExpandableButton={props.expand}
			/>
			<CardMedia expandable={props.expand} style={styles.cardMedia}>
				<h3 style={styles.h3}>{props.text}</h3>
				{props.children}
			</CardMedia>
		</Card>
	);
};

export default MyCard;
