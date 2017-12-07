import React from 'react';

import Genres from './tabContent/genres/Genres';
import ArtistsNTracks from './tabContent/artistsNtracks/ArtistsNTracks';
import Sounds from './tabContent/sounds/Sounds';

/* General container for rendered content. Just a prop disperser */
const TabContent = props => {
	return (
		<div>
			<Genres
				isDialogOpen={props.isDialogOpen}
				handleDialogOpen={props.handleDialogOpen}
				handleDialogClose={props.handleDialogClose}
				extraGenres={props.extraGenres}
				cloudColors={props.cloudColors}
				graphData={props.graphData}
				graphColor={props.graphColor}
				graphFill={props.graphFill}
				tabColor={props.tabColor}
			/>
			<ArtistsNTracks
				artistData={props.artistData}
				trackData={props.trackData}
				avgArtistPopularity={props.avgArtistPopularity}
				avgTrackPopularity={props.avgTrackPopularity}
				tabColor={props.tabColor}
			/>
			<Sounds audioFeatures={props.audioFeatures} tabColor={props.tabColor} />
		</div>
	);
};

export default TabContent;
