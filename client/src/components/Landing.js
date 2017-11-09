import React from 'react';
import('../styles/Landing.css');

const Landing = () => {
	return (
		<div className="site">
			<button className="spotify-login-button">
				<a href="/auth/spotify">Sign in with Spotify</a>
			</button>
		</div>
	);
};

export default Landing;
