const request = require('request');
const keys = require('../config/keys');

module.exports = app => {
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/refresh_token', (req, res) => {
		const refresh_token = req.user.spotifyRefreshToken;
		const encoded_keys = new Buffer(
			keys.SPOTIFY_CLIENT_ID + ':' + keys.SPOTIFY_CLIENT_SECRET
		).toString('base64');
		const authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			headers: { Authorization: 'Basic ' + encoded_keys },
			form: {
				grant_type: 'refresh_token',
				refresh_token: refresh_token
			},
			json: true
		};

		request.post(authOptions, (error, response, body) => {
			if (error) {
				console.log(error);
			}
			if (!error && response.statusCode === 200) {
				const access_token = body.access_token;
				res.send({
					access_token: access_token
				});
			}
		});
	});
};
