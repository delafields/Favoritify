import React from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import request from 'request';

const submit = ({ TimePeriod, NumResults, ArtistsOrTracks }) => {
	console.log('submit inside form');
	console.log(TimePeriod, NumResults, ArtistsOrTracks);
};

const OptionsFormFunc = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit(submit)}>
		<div>
			<label>Time Period</label>
			<div>
				<label>
					<Field
						name="TimePeriod"
						component="input"
						type="radio"
						value="short_term"
					/>
					Short Term
				</label>
				<label>
					<Field
						name="TimePeriod"
						component="input"
						type="radio"
						value="medium_term"
					/>
					Medium Term
				</label>
				<label>
					<Field
						name="TimePeriod"
						component="input"
						type="radio"
						value="long_term"
					/>
					Long term
				</label>
			</div>
		</div>
		<div>
			<label>Number of Results</label>
			<div>
				<label>
					<Field name="NumResults" component="input" type="radio" value="5" />
					5
				</label>
				<label>
					<Field name="NumResults" component="input" type="radio" value="10" />
					10
				</label>
				<label>
					<Field name="NumResults" component="input" type="radio" value="20" />
					20
				</label>
			</div>
		</div>
		<div>
			<label>Artists or Tracks</label>
			<div>
				<label>
					<Field
						name="ArtistsOrTracks"
						component="input"
						type="radio"
						value="artists"
					/>
					Artists
				</label>
				<label>
					<Field
						name="ArtistsOrTracks"
						component="input"
						type="radio"
						value="tracks"
					/>
					Tracks
				</label>
			</div>
		</div>
		<button type="submit">Submit</button>
	</form>
);

const OptionsForm = reduxForm({
	form: 'options'
})(OptionsFormFunc);

export default OptionsForm;

/*
https://www.youtube.com/watch?v=itlSR3hm5AM
chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=tech-interview-handbook%2Fpreparing%20at%20master%20%C2%B7%20yangshun%2Ftech-interview-handbook&uri=https://github.com/yangshun/tech-interview-handbook/tree/master/preparing
chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=TimeComplexity%20-%20Python%20Wiki&uri=https://wiki.python.org/moin/TimeComplexity
chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Hammer.JS%20-%20Hammer.js&uri=https://hammerjs.github.io/
*/
