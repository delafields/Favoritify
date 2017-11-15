import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ReactTooltip from 'react-tooltip';

const Avatars = props => {
	const artists = props.artists;
	const flexContainer = {
		display: 'flex',
		flexDirection: 'row',
		padding: 0
	};

	const listArtists = artists.map(artist => (
		<ListItem key={artist.artistName}>
			<a data-tip data-for={artist.artistName}>
				<Avatar src={artist.artistImage} size={50} />
			</a>
			<ReactTooltip id={artist.artistName}>
				<span>{artist.artistName}</span>
			</ReactTooltip>
		</ListItem>
	));

	return <List style={flexContainer}>{listArtists}</List>;
};

export default Avatars;
