import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import { blueGrey900 } from 'material-ui/styles/colors';

const Landing = () => {
	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: blueGrey900
			}}
		>
			<h1
				style={{
					fontFamily: 'Lato, sans-serif',
					fontWeight: '300',
					color: 'white'
				}}
			>
				What Kind Of Music Do You Like?
			</h1>
			<FlatButton
				href="/auth/spotify"
				style={{
					backgroundColor: '#84bd00',
					color: 'white',
					fontWeight: '300',
					padding: '0 20px'
				}}
			>
				Sign In With Spotify
			</FlatButton>
		</div>
	);
};

export default Landing;
