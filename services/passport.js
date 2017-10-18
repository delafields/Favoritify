const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new SpotifyStrategy(
		{
			clientID: keys.SPOTIFY_CLIENT_ID,
			clientSecret: keys.SPOTIFY_CLIENT_SECRET,
			callbackURL: '/auth/spotify/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ spotifyID: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ spotifyID: profile.id }).save();
			done(null, user);
		}
	)
);
