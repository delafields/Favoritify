const artistURL =
	'https://api.spotify.com/v1/me/top/artists?limit=20&time_range=';
const trackURL =
	'https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=';

export const shortTermArtistsOptions = {
	url: `${artistURL}short_term`,
	json: true
};

export const medTermArtistsOptions = {
	url: `${artistURL}medium_term`,
	json: true
};

export const longTermArtistsOptions = {
	url: `${artistURL}long_term`,
	json: true
};

export const shortTermTracksOptions = {
	url: `${trackURL}short_term`,
	json: true
};

export const medTermTracksOptions = {
	url: `${trackURL}medium_term`,
	json: true
};

export const longTermTracksOptions = {
	url: `${trackURL}medium_term`,
	json: true
};
