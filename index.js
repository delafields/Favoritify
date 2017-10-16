const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
	new SpotifyStrategy(
		{
			clientID: keys.SPOTIFY_CLIENT_ID,
			clientSecret: keys.SPOTIFY_CLIENT_SECRET,
			callbackURL: '/auth/spotify/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken: ', accessToken);
			console.log('refreshToken: ', refreshToken);
			console.log('profile: ', profile);
		}
	)
);

app.get(
	'/auth/spotify',
	passport.authenticate('spotify', {
		scope: ['user-read-email', 'user-top-read']
	})
);

app.get('/auth/spotify/callback', passport.authenticate('spotify'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
