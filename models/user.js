const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	spotifyID: String,
	spotifyRefreshToken: String
});

mongoose.model('users', userSchema);
