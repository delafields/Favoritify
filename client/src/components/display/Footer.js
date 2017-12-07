import React from 'react';
import {
	indigoA700,
	purpleA400,
	deepPurpleA700,
	blueGrey900
} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const Footer = () => {
	const styles = {
		container: {
			display: 'flex',
			marginTop: '-5px'
		},
		left: {
			width: 'calc(100% / 3)',
			backgroundColor: purpleA400,
			textAlign: 'center'
		},
		center: {
			width: 'calc(100% / 3)',
			backgroundColor: deepPurpleA700,
			textAlign: 'center'
		},
		right: {
			width: 'calc(100% / 3)',
			backgroundColor: indigoA700,
			textAlign: 'center'
		},
		octocat: {
			color: 'white',
			cursor: 'pointer',
			marginTop: '5px'
		},
		text: {
			color: blueGrey900
		}
	};

	return (
		<Paper rounded={false} z-depth={2} style={styles.container}>
			<div style={styles.left}>
				<h3 style={styles.text}>FAVORITIFY</h3>
			</div>
			<div style={styles.center}>
				<a href="https://github.com/delafields" style={styles.octocat}>
					<i className="fa fa-github fa-4x" aria-hidden="true" />
				</a>
			</div>
			<div style={styles.right}>
				<h3 style={styles.text}>&copy; delafields 2017</h3>
			</div>
		</Paper>
	);
};

export default Footer;
