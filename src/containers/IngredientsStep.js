import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { includes } from '../utils';
import { Row, Col } from 'react-bootstrap';
import { addIngredient, removeIngredient } from '../redux-modules/ingredients';
import { setStepCompleted } from '../redux-modules/stepper';

import  { fetchIngredients }  from '../API_MOCK';
 
import { StepperButton,  PizzaItem } from '../components/';

/*
	second step. add ingredient
*/

export class IngredientsStep extends Component {
	constructor(){
		super();
		this.state = {
			ingredients : [],
		}
	}


	componentWillMount(){
		const { history, stepper } = this.props;

		if(!stepper[0].completed){
			history.push("/checkout/dough");
		}
	}

	componentDidMount(){
		
		var ingredients = fetchIngredients();
		this.setState({
			ingredients : ingredients,
		})
	}


	handleIngredientChange = (e, item) => {
		
		const { myIngredients, addIngredient, removeIngredient, setStepCompleted } = this.props;
		
		if (includes(item, myIngredients)){
			removeIngredient(item.id);
		}
		else {
			addIngredient(item);
			if (myIngredients.lenght > 0){
				setStepCompleted('ingredients');
			}
			
		}
	}


	next = () => {
		this.props.history.push("/checkout/review");
	}


	prev = () => {
		this.props.history.push("/checkout/dough");
	}


	isDisabled = () => {
		return !this.props.stepper[1].completed;
	}

	
	render(){
		
		return(
			<Row className="step-container">
				<Col xs={12}>
					<h1>Choose your ingredients</h1>
				</Col>
				<Col xs={12}>
					<ul className="list-container" aria-labelledby="ingredients">
							{this.state.ingredients.map( item => 
								<PizzaItem 
									key={item.id}
									item={item}
									type="checkbox" 
									isSelected={includes(item, this.props.myIngredients)} 
									onChange={this.handleIngredientChange} 
								/>
							)}
						</ul>
				</Col>
				<Col xs={6} style={{"textAlign":'center'}}>
					<StepperButton  onClick={this.prev}>PREV</StepperButton>
				</Col>
				<Col xs={6} style={{"textAlign":'center'}}>
					<StepperButton disabled={this.isDisabled()}  onClick={this.next}>NEXT</StepperButton>
				</Col>
			</Row>
		)
	}
}


IngredientsStep.propTypes = {
	myIngredients: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	})).isRequired,
	stepper: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	myIngredients : state.ingredients.myIngredients,
	stepper: state.stepper,
})

const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{
			addIngredient,
			removeIngredient,
			setStepCompleted,
		},
		dispatch,
	);


export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(IngredientsStep);