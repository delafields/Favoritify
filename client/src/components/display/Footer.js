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
			display: 'flex'
		},
		left: {
			width: 'calc(100% / 3)',
			backgroundColor: purpleA400,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		center: {
			width: 'calc(100% / 3)',
			backgroundColor: deepPurpleA700,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		right: {
			width: 'calc(100% / 3)',
			backgroundColor: indigoA700,
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		octocat: {
			color: 'white',
			cursor: 'pointer'
		},
		text: {
			color: blueGrey900
		}
	};

	return (
		<Paper rounded={false} z-depth={2} style={styles.container}>
			<div style={styles.left}>
				<h4 style={styles.text}>FAVORITIFY</h4>
			</div>
			<div style={styles.center}>
				<a href="https://github.com/delafields" style={styles.octocat}>
					<i className="fa fa-github fa-3x" aria-hidden="true" />
				</a>
			</div>
			<div style={styles.right}>
				<h4 style={styles.text}>&copy; delafields 2017</h4>
			</div>
		</Paper>
	);
};

export default Footer;
