import React from 'react';
import('../styles/Landing.css');

const Landing = () => {
	return (
		<div className="site">
			<div className="title-wrapper">
				<h1 className="title">What Kind Of Music Do You Like?</h1>
				<button className="spotify-login-button">
					<a className="spotify-login-text" href="/auth/spotify">
						Sign in with Spotify
					</a>
				</button>
			</div>
		</div>
	);
};

export default Landing;
