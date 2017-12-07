/* Various colors to be sent as props */
import {
	indigoA100,
	indigo200,
	indigoA200,
	indigo300,
	indigo400,
	indigoA400,
	indigo500,
	indigo600,
	indigo700,
	indigoA700,
	indigo800,
	indigo900,
	deepPurpleA100,
	deepPurple200,
	deepPurpleA200,
	deepPurple300,
	deepPurple400,
	deepPurpleA400,
	deepPurple500,
	deepPurple600,
	deepPurple700,
	deepPurpleA700,
	deepPurple800,
	deepPurple900,
	purpleA100,
	purple200,
	purpleA200,
	purple300,
	purple400,
	purpleA400,
	purple500,
	purple600,
	purple700,
	purpleA700,
	purple800,
	purple900
} from 'material-ui/styles/colors';

/* Colors to fill the genre pie graphs */
export const graph_colors = {
	short: [
		indigoA100,
		indigo200,
		indigoA200,
		indigo300,
		indigo400,
		indigoA400,
		indigo500,
		indigo600,
		indigo700,
		indigoA700,
		indigo800,
		indigo900
	],
	med: [
		deepPurpleA100,
		deepPurple200,
		deepPurpleA200,
		deepPurple300,
		deepPurple400,
		deepPurpleA400,
		deepPurple500,
		deepPurple600,
		deepPurple700,
		deepPurpleA700,
		deepPurple800,
		deepPurple900
	],
	long: [
		purpleA100,
		purple200,
		purpleA200,
		purple300,
		purple400,
		purpleA400,
		purple500,
		purple600,
		purple700,
		purpleA700,
		purple800,
		purple900
	]
};

/* Tab theme sent as props */
export const tab_color = {
	short: 'blue',
	med: '#6200EA',
	long: '#D500F9'
};

/* Colors for the extra genres word cloud */
export const cloud_colors = {
	short: {
		luminosity: 'bright',
		hue: 'blue'
	},
	med: {
		luminosity: 'bright',
		hue: 'purple'
	},
	long: {
		luminosity: 'bright',
		hue: 'pink'
	}
};
