import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import { purpleA400 } from 'material-ui/styles/colors';

const MyLoader = () => {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 450
	};

	return (
		<div style={styles}>
			<CircularProgress size={200} thickness={5} color={purpleA400} />
		</div>
	);
};

export default MyLoader;
