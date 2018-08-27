import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const StepperButton = ({ className, to, children }) => {
	return(
		<Link className={className} to={to}>{children}</Link>
	)
}

StepperButton.propTypes = {
	className: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
}

StepperButton.defaultProp = {
	className: 'btn-stepper',	
}

export default StepperButton;
