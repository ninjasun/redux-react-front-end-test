import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { DoughStep, IngredientsStep, ReviewStep } from '../containers/';

import { StepperProgress } from '../containers/';

/*
	Render a step according to the url
*/
export const Checkout = ({ match }) =>  {
	
	function renderStep (step){
		switch(step){
			case 'dough':
				return   <DoughStep />
			case 'ingredients':
				return  <IngredientsStep  />
			case 'review':
				return <ReviewStep />
			default:
				return <p>undefined step</p>
		}
	}
	var currentStep = renderStep(match.params.step);

	return(
		<Grid>
			<Row>
				<Col xs={12}>
					<StepperProgress />
				</Col>
			</Row>
			{currentStep}
		</Grid>
	)
}

Checkout.propTypes = {
	match : PropTypes.object.isRequired,
}

Checkout.defaultProps = {
	match: {params:{step :'dough'}},
}

export default withRouter(Checkout);