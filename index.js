const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user'); // must come before requiring passport
require('./services/passport');

// Fix promise deprecation
mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGO_URI, {
	// Fix connect deprecation
	useMongoClient: true
});

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		keys: [keys.COOKIE_KEY]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Serve production assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	// Serve index.html if route is unrecognized
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
