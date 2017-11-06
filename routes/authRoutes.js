const passport = require('passport');

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

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
