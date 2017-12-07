/* Features to be mapped over in FeatureDescriptions */
export const audio_features = [
	{
		name: 'valence',
		description:
			'Describes the positiveness of a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).'
	},
	{
		name: 'energy',
		description:
			'Represents a perceptual measure of intensity and activity. ypically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale.'
	},
	{
		name: 'danceability',
		description:
			'Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.'
	},
	{
		name: 'speechiness',
		description:
			'Detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the higher the value.'
	},
	{
		name: 'liveness',
		description:
			'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.'
	},
	{
		name: 'instrumentalness',
		description:
			'Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal".'
	}
];
