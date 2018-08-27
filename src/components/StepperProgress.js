import React from 'react';


const StepperProgress = (props) => {
	var stepper = [{
		name : 'dough'
	}];
	return (
		<div className="stepper-progress-container">
			<ul>
				<li> dough </li>
				<li> ingredients </li>
				<li> review </li>
			</ul>
		</div>
		)
}

export default StepperProgress;