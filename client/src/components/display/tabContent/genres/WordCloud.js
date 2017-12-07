import React from 'react';
import { TagCloud } from 'react-tagcloud';
import './wordCloud.css';

/* Generates randomly sized, softly blinking words */
const customRenderer = (tag, size, color) => (
	<span
		key={tag.value}
		style={{
			animation: 'blinker 3s linear infinite',
			animationDelay: `${Math.random() * 2}s`,
			fontSize: `${size}em`,
			margin: '3px',
			padding: '3px',
			display: 'inline-block',
			color: `${color}`
		}}
	>
		{tag.value}
	</span>
);

/* Generates word cloud of extra genre data */
const WordCloud = props => {
	const styles = {
		cloudText: {
			fontFamily: 'Lato, sans-serif',
			textTransform: 'capitalize',
			textAlign: 'center',
			marginTop: '20px'
		}
	};

	return (
		<TagCloud
			tags={props.extraGenres}
			style={styles.cloudText}
			colorOptions={props.cloudColors}
			minSize={1}
			maxSize={2}
			renderer={customRenderer}
		/>
	);
};

export default WordCloud;
