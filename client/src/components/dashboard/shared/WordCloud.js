import React from 'react';
import { TagCloud } from 'react-tagcloud';

const WordCloud = props => {
	return (
		<TagCloud
			tags={props.tags}
			colorOptions={props.colorOptions}
			minSize={12}
			maxSize={35}
			style={{ fontFamily: 'Lato, sans-serif', textTransform: 'uppercase' }}
		/>
	);
};

export default WordCloud;
