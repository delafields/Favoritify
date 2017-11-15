const passport = require('passport');
const request = require('request');
const axios = require('axios');
const _ = require('lodash');
const keys = require('../config/keys');

module.exports = app => {
	app.get(
		'/auth/spotify',
		passport.authenticate('spotify', {
			scope: ['user-read-email', 'user-top-read']
		})
	);

	app.get(
		'/auth/spotify/callback',
		passport.authenticate('spotify'),
		(req, res) => {
			res.redirect('/dashboard');
		}
	);
};
