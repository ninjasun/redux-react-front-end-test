import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

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


	componentDidMount(){
		const { history, stepper } = this.props;

		if(!stepper[0].completed){
			history.push("/checkout/dough");
		}
		var ingredients = fetchIngredients();
		this.setState({
			ingredients : ingredients,
		})
	}


	handleIngredientChange = (e, item) => {
		
		const { myIngredients, addIngredient, removeIngredient, setStepCompleted } = this.props;
		
		if (myIngredients.includes(item)){
			removeIngredient(item.id);
		}
		else {
			addIngredient(item);
			setStepCompleted('ingredients');
		}
	}

/*
* if id is included into myIngredients return true else false
*/
	includes = (item) => {
		const { myIngredients } = this.props;

		if (myIngredients.lenght === 0) return false;

		var found = myIngredients.find( (ingredient) => {
			return ingredient.id === item.id;
		});
		
		if (found) return true;
			else return false;
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
									item={item}
									type="checkbox" 
									isSelected={this.includes(item)} 
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
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		price: PropTypes.string,
	})),
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