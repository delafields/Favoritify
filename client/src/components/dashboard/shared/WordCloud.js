import React from 'react';
import { TagCloud } from 'react-tagcloud';

const WordCloud = props => {
	const styles = {
		cloudText: {
			fontFamily: 'Lato, sans-serif',
			textTransform: 'capitalize'
		}
	};

	return (
		<TagCloud
			tags={props.tags}
			colorOptions={props.colorOptions}
			minSize={16}
			maxSize={28}
			style={styles.cloudText}
		/>
	);
};

export default WordCloud;
