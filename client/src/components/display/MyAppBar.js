import React from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { blueGrey900 } from 'material-ui/styles/colors';

const MyAppBar = props => {
	const styles = {
		title: {
			textAlign: 'center',
			color: 'white',
			fontWeight: '300'
		},
		root: {
			backgroundColor: blueGrey900
		},
		leftIcon: {
			color: 'white'
		},
		button: {
			marginTop: '10px'
		}
	};

	return (
		<AppBar
			title="FAVORITIFY"
			titleStyle={styles.title}
			style={styles.root}
			iconStyleLeft={styles.leftIcon}
			iconElementLeft={props.iconElementLeft}
			iconElementRight={
				<RaisedButton style={styles.button} label="logout" href="/api/logout" />
			}
		/>
	);
};

export default MyAppBar;
