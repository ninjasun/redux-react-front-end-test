import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { StepperButton, OrderCard } from '../components/';
import { Row, Col } from 'react-bootstrap';



export class ReviewStep  extends Component  {
	
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


	getTotalPrice = () => {
		var price = 0;
		price += parseFloat(this.props.myDough.price);
		this.props.myIngredients.map( item => {
			price += parseFloat(item.price);
		})
		
		return price +' $';
	}


	render(){
		const { history, stepper } = this.props;

		if (!stepper[0].completed) history.push('/checkout/dough');

		if (!stepper[1].completed) history.push('/checkout/ingredients');

		const { myDough, myIngredients } = this.props;
		const totalPrice = this.getTotalPrice();

		return(
			<Row className="step-container">
				<Col xs={12}>
					<h1>Order review</h1>
				</Col>
				<OrderCard 
					dough={myDough} 
					ingredients={myIngredients} 
					price={totalPrice} 
				/>
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


export default compose(
	withRouter,
	connect(mapStateToProps)
)(ReviewStep);
