import React from 'react';
import { TagCloud } from 'react-tagcloud';

const WordCloud = props => {
	const styles = {
		cloudText: {
			fontFamily: 'Lato, sans-serif',
			textTransform: 'capitalize',
			textAlign: 'center'
		}
	};

	return (
		<TagCloud
			style={styles.cloudText}
			tags={props.tags}
			colorOptions={props.colorOptions}
			minSize={16}
			maxSize={28}
		/>
	);
};

export default WordCloud;
