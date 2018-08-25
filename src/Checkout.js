import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2'



class Checkout extends Component  {
	
	constructor(){
		super();
		this.state = {
			
		}
	}

	renderStep = () => {
		const currentStep = this.props.match.params.step;
		switch(currentStep){
			case 'step1':
				return <Step1 />
			case 'step2':
				return <Step2 />
			default:
				return <p>undefined step</p>
		}
	}
	render(){
		console.log("match params: ", )
		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Progress:</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={4}>
						<h1>My pizza:</h1>
					</Col>
					<Col xs={12} sm={8}>
						<div className="step-container">
							{this.renderStep()}
						</div>
					</Col>

				</Row>
			</Grid>
		)
	}
}

export default Checkout;