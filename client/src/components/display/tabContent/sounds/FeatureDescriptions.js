import React from 'react';
import { audio_features } from '../../../../utils/audio_features';

/* Scrollable box with descriptions for the SoundGraph */
export const FeatureDescriptions = () => {
	const styles = {
		container: {
			minWidth: '300px',
			width: '90%',
			height: '150px',
			overflowY: 'scroll',
			border: '2px solid white'
		},
		text: {
			color: 'white'
		},
		feature: {
			margin: '0 10px'
		}
	};

	return (
		<div style={styles.container}>
			{audio_features.map(feature => (
				<div style={styles.feature} key={feature.name}>
					<h3 style={styles.text}>{feature.name}</h3>
					<h5 style={styles.text}>{feature.description}</h5>
				</div>
			))}
		</div>
	);
};

export default FeatureDescriptions;
