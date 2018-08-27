import React from 'react';
import { withRouter } from 'react-router-dom';

/*
	current step has background red
	completed step has background red
	inactive has background red opacity 0.7
*/



const StepperProgress = (props) => {
	console.log("stepper props: ", props)
	const urlStep = props.match.params.step;
	return (
		<div className="stepper-progress-container">
			<ul>
				<li className={urlStep === 'dough' ? 'active' : ''}> dough </li>
				<li className={urlStep === 'ingredients' ? 'active' : ''}>  ingredients </li>
				<li className={urlStep === 'review' ? 'active' : ''}> review </li>
			</ul>
		</div>
		)
}

export default withRouter(StepperProgress);