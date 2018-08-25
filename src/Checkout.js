import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import DoughStep from './DoughStep';
import IngredientsStep from './IngredientsStep';
import ReviewStep from './ReviewStep';
import StepperProgress from './StepperProgress';



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
					<Col xs={12} sm={4}>
						<h1>My pizza:</h1>
					</Col>
					<Col xs={12} sm={8}>
						<div className="step-container">
							{renderStep(match.params.step)}
						</div>
					</Col>

				</Row>
			</Grid>
		)
	
}

export default Checkout;