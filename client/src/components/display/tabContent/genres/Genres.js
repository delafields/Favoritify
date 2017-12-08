import React from 'react';
import GenrePie from './GenrePie';
import ExtraGenres from './ExtraGenres';
import Paper from 'material-ui/Paper';
import './styles/genrePie.css';

/* Container for genre graph, list and dialog */
const Genres = props => {
	const genres = props.graphData;

	const styles = {
		container: {
			backgroundColor: 'black'
		},
		contentWrapper: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			alignItems: 'center'
		},
		title: {
			color: 'white',
			padding: '20px'
		},
		graph: {
			minWidth: '300px',
			width: '50%',
			maxWidth: '600px',
			marginBottom: '20px'
		},
		list: {
			minWidth: '320px',
			marginLeft: '80px',
			marginBottom: '60px'
		},
		listItem: {
			margin: '20px 0px'
		},
		listText: {
			color: 'white',
			textTransform: 'capitalize',
			display: 'inline'
		},
		listSlashes: {
			color: 'white',
			textTransform: 'capitalize',
			display: 'inline',
			paddingRight: '10px'
		}
	};

	return (
		<Paper zDepth={2} rounded={false} style={styles.container}>
			<h1 style={styles.title}>Top Genres</h1>
			<div style={styles.contentWrapper}>
				<div id="noSelect" style={styles.graph}>
					<GenrePie data={props.graphData} graphColor={props.graphColor} />
				</div>
				<div style={styles.list}>
					{genres ? (
						genres.map((genre, index) => (
							<div style={styles.listItem} key={genre.name}>
								<h1 style={styles.listText}>{index + 1}</h1>
								<h2 style={styles.listSlashes}>//</h2>
								<h4 style={styles.listText}>{genre.name}</h4>
							</div>
						))
					) : (
						<h1>Loading</h1>
					)}
					<ExtraGenres
						isDialogOpen={props.isDialogOpen}
						handleDialogOpen={props.handleDialogOpen}
						handleDialogClose={props.handleDialogClose}
					/>
				</div>
			</div>
		</Paper>
	);
};

export default Genres;
