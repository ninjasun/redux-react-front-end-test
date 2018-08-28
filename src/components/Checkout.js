import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { DoughStep, IngredientsStep, ReviewStep } from '../containers/';

import { StepperProgress } from './';



const Checkout = ({ match }) =>  {
	
	function renderStep (step){
		switch(step){
			case 'dough':
				return   <DoughStep key="doughAnimation"/>
			case 'ingredients':
				return  <IngredientsStep key="ingredientsAnimation" />
			case 'review':
				return <ReviewStep key="reviewAnimation"/>
			default:
				return <p>undefined step</p>
		}
	}
	var currentStep = renderStep(match.params.step);

	return(
		<Grid>
			<Row>
				<Col xs={12}>
					<StepperProgress currentStep={match.params.step}/>
				</Col>
			</Row>
			{currentStep}
		</Grid>
	)
}

Checkout.propTypes = {
	match : PropTypes.object.isRequired,
}

export default Checkout;