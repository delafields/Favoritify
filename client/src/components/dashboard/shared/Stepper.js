import React from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';

const MyStepper = props => {
	return (
		<Stepper linear={false} activeStep={props.stepIndex}>
			<Step>
				<StepButton icon={null} onClick={props.handleShortClick}>
					Short Term
					<br />
					(4 Weeks)
				</StepButton>
			</Step>
			<Step>
				<StepButton icon={null} onClick={props.handleMedClick}>
					Medium Term
					<br />
					(6 Months)
				</StepButton>
			</Step>
			<Step>
				<StepButton icon={null} onClick={props.handleLongClick}>
					Long Term
					<br />
					(Several Years)
				</StepButton>
			</Step>
		</Stepper>
	);
};

export default MyStepper;
