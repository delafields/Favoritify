import React from 'react';
import WordCloud from './WordCloud';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Clear from 'material-ui/svg-icons/content/clear';
import { red500 } from 'material-ui/styles/colors';

/* Dialog that contains the extra genre word cloud */
const ExtraGenres = props => {
	const styles = {
		button: {
			width: '60%',
			margin: '20px 20% 0 20%'
		},
		dialogTitle: {
			textAlign: 'center',
			color: 'white',
			backgroundColor: 'black',
			fontWeight: '300',
			fontSize: '14px',
			border: '1px dotted white',
			borderBottom: '1px solid black'
		}
	};

	return (
		<div>
			<FlatButton
				backgroundColor={'white'}
				label="Extra Genres"
				onClick={props.handleDialogOpen}
				style={styles.button}
			/>
			<Dialog
				title="Spotify tags their songs with over 1000 genres. Here are some of the more esoteric ones that showed up for you."
				titleStyle={styles.dialogTitle}
				actions={
					<FlatButton
						icon={<Clear color={red500} />}
						primary={true}
						onClick={props.handleDialogClose}
					/>
				}
				modal={false}
				open={props.isDialogOpen}
				onRequestClose={props.handleDialogClose}
				autoScrollBodyContent={true}
			>
				<WordCloud
					extraGenres={props.extraGenres}
					cloudColors={props.cloudColors}
				/>
			</Dialog>
		</div>
	);
};

export default ExtraGenres;
