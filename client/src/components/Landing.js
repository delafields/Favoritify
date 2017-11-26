import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { blueGrey900 } from 'material-ui/styles/colors';

const Landing = () => {
	const styles = {
		wrapper: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: blueGrey900
		},
		title: {
			fontFamily: 'Lato, sans-serif',
			fontWeight: '300',
			color: 'white'
		},
		spotifyLoginButton: {
			backgroundColor: '#84bd00',
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
