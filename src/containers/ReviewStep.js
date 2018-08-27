import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { StepperButton } from '../components/';
import { Row, Col } from 'react-bootstrap';



class ReviewStep  extends Component  {
	constructor(){
		super();
	}


	componentDidMount = () => {
		const { history , stepper } = this.props;
		if(!stepper[0].completed){
			history.push("/checkout/dough");
		}

		if(!stepper[1].completed){
			history.push("/checkout/ingredients");
		}
	}


	 onSubmit = () => {
		alert('congratulation your order was sumbitted')
	}


	 prev = () => {
	 	const { history } = this.props;
		history.push('/checkout/ingredients')
	}


	render(){
		const { history, stepper } = this.props;

		if (!stepper[0].completed) history.push('/checkout/dough');

		if (!stepper[1].completed) history.push('/checkout/ingredients');

		const { myDough, myIngredients } = this.props;

		return(
			<Row >
				<Col xs={12}>
					<h1>order review</h1>
				</Col>
				<Col xs={12}>
					<p>{myDough.name}</p>
				</Col>
				<Col xs={12}>
					<ul>
						{myIngredients.map( item =>
							<li key={item.id}>{item.name}</li>
						)}
					</ul>
				</Col>
				<Col xs={6} style={{"textAlign":'center'}} >
					<StepperButton  onClick={this.prev}>PREV</StepperButton>
				</Col>
				<Col xs={6} style={{"textAlign":'center'}}>
					<StepperButton  onClick={this.onSubmit}>ORDER</StepperButton>
				</Col>
			</Row>
		)
	}
}

ReviewStep.propTypes = {
	myDough: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	}).isRequired,
	myIngredients: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	})).isRequired,
	history: PropTypes.object.isRequired,
	stepper: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	myIngredients : state.ingredients.myIngredients,
	myDough: state.dough.myDough,
	stepper: state.stepper,
})


// const mapDispatchToProps = dispatch => 
// 	bindActionCreators(
// 		{
// 			submitOrder,
// 		},
// 		dispatch,
// 	);



export default compose(
	withRouter,
	connect(mapStateToProps)
)(ReviewStep);
