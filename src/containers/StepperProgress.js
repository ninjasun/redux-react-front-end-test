import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

/*
	current step has background red
	completed step has background red
	inactive has background red opacity 0.7
*/

export const StepperProgress = ({stepper, match}) => {
	
	const urlStep = match.params.step;
	
	const isActive = (stepName) =>{
		return urlStep === stepName;
	}

	const isCompleted = (stepIndex) =>{
		return stepper[stepIndex].completed;
	}

	return (
		<div className="stepper-progress-container">
			<ul>
				<li className={isActive('dough') || isCompleted(0) ? 'active' : ''}> dough </li>
				<li className={isActive('ingredients') || isCompleted(1) ? 'active' : ''}>  ingredients </li>
				<li className={isActive('review') || isCompleted(2) ? 'active' : ''}> review </li>
			</ul>
		</div>
		)
}

StepperProgress.propTypes = {
	stepper: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	stepper : state.stepper,
})

export default compose(
	withRouter,
	connect(mapStateToProps)
)(StepperProgress);

