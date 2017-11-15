import React from 'react';
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card';

const AvatarCard = props => (
	<Card>
		<CardHeader title={props.title} titleStyle={{ backgroundColor: 'blue' }} />
		<CardMedia>{props.children}</CardMedia>
	</Card>
);

export default AvatarCard;
