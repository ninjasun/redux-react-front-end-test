import React from 'react';
import PropTypes from 'prop-types';


const StepperButton = ({  onClick, children, disabled }) => {
	return(
		<button type="button" disabled={disabled} className="btn-stepper" onClick={onClick}>{children}</button>
	)
}

StepperButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
}

StepperButton.defaultProp = {
	disabled: false,
}

export default StepperButton;
