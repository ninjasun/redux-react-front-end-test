import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { DoughStep, IngredientsStep, ReviewStep } from '../containers/';

import { StepperProgress } from './';



const Checkout = ({ match }) =>  {
	
	function renderStep (step){
		//const currentStep = match.params.step;
		console.log("current step is: ", step);

		switch(step){
			case 'dough':
				return <DoughStep />
			case 'ingredients':
				return <IngredientsStep />
			case 'review':
				return <ReviewStep />
			default:
				return <p>undefined step</p>
		}
	}
	
		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<StepperProgress currentStep={match.params.step}/>
					</Col>
				</Row>
				<Row>
					
					<Col xs={12} sm={12}>
						<div className="step-container">
							{renderStep(match.params.step)}
						</div>
					</Col>

				</Row>
			</Grid>
		)
	
}
Checkout.propTypes = {
	match : PropTypes.object.isRequired,
}

export default Checkout;