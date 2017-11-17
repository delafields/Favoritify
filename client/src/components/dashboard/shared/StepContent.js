import React from 'react';
import ArtistImageList from '../shared/ArtistImageList';
import WordCloud from '../shared/WordCloud';
import Graph from '../shared/Graph';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { blueGrey900, indigoA700, purpleA400 } from 'material-ui/styles/colors';

const StepContent = props => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row wrap',
				width: '100%'
			}}
		>
			<div style={{ flex: 2, height: '100%' }}>
				<Paper zdepth={2} rounded={false} style={{ backgroundColor: 'white' }}>
					<h1
						style={{
							textAlign: 'center',
							fontWeight: '300',
							color: indigoA700
						}}
					>
						Top Artists
					</h1>
					<ArtistImageList artists={props.avatarImages} />
				</Paper>
			</div>
			<div style={{ flex: 2, height: '100%' }}>
				<Paper zdepth={2} rounded={false} style={{ backgroundColor: 'white' }}>
					<h1
						style={{
							textAlign: 'center',
							fontWeight: '300',
							color: indigoA700
						}}
					>
						Top Genres
					</h1>
					<Graph data={props.graphData} />
				</Paper>
				<Paper zdepth={2} rounded={false} style={{ backgroundColor: 'white' }}>
					<h1
						style={{
							textAlign: 'center',
							fontWeight: '300',
							color: indigoA700
						}}
					>
						Extra Genres
					</h1>
					<WordCloud
						tags={props.extraGenres}
						colorOptions={props.cloudColors}
					/>
				</Paper>
			</div>
		</div>
	);
};

export default StepContent;
