const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user'); // must come before requiring passport
require('./services/passport');

// Fix promise deprecation
mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGO_DEV_URI, {
	// Fix connect deprecation
	useMongoClient: true
});

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
