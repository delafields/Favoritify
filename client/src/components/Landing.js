import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { blueGrey900 } from 'material-ui/styles/colors';

import * as bgImg from '../assets/MusicEmoji.png';

const Landing = () => {
	const styles = {
		wrapper: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			backgroundColor: blueGrey900,
			backgroundImage: `url(${bgImg})`
		},
		title: {
			fontFamily: 'Lato, sans-serif',
			fontWeight: '300',
			color: 'white'
		},
		spotifyLoginButton: {
			backgroundColor: '#1DB954',
			color: 'white',
			fontWeight: '300',
			padding: '0 20px'
		}
	};

	return (
		<div style={styles.wrapper}>
			<h1 style={styles.title}>What Kind Of Music Do You Like?</h1>
			<FlatButton href="/auth/spotify" style={styles.spotifyLoginButton}>
				Sign In With Spotify
			</FlatButton>
		</div>
	);
};

export default Landing;
