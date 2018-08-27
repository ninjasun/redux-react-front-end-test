import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { Row, Col } from 'react-bootstrap';
import { addIngredient, removeIngredient } from '../redux-modules/ingredients'
import  { fetchIngredients }  from '../API_MOCK';

import { StepperButton, CheckBox } from '../components/';

/*
	load and display data from API: impasto
	load current pizza 
	display a form
*/

class IngredientsStep extends Component {
	constructor(){
		super();
		this.state = {
			ingredients : [],
		}
	}
	componentDidMount(){
		var ingredients = fetchIngredients();
		this.setState({
			ingredients : ingredients,
		})
	}


	handleIngredientChange = (e, item) => {
		
		const { myIngredients } = this.props;
		
		if (myIngredients.includes(item)){
			this.props.removeIngredient(item.id);
		}
		else {
			this.props.addIngredient(item);
		}
	}

/*
	if id is included into myIngredients return true else false
*/
	includes = (item) => {
		//console.log("INCLUDES, myIngredients: ", this.props.myIngredients);
		//console.log("INCLUDES: item: ", item)
		if (this.props.myIngredients.lenght === 0) return false

		var found = this.props.myIngredients.find( (ingredient) => {
			//console.log("FINDING: ", ingredient)
			return ingredient.id === item.id;
		})
		//console.log("found is: ", found)
		if (found) return true
			else return false
		
	}

	render(){
		//console.log("PROPS ", this.props)
		const initialValues = []
		return(
			<Row>
				<Col xs={12}>
					<h1>Choose your ingredients</h1>
				</Col>
				<Col xs={12}>
					<ul>
							{this.state.ingredients.map( item => 
								<div className="dough-radio-item" key={item.id}>
									<CheckBox 
										checked={this.includes(item)} 
										name={item.name}  
										value={item.id}  
										onChange={(e) => {this.handleIngredientChange(e,item)}} 
										/>
								</div>
								)}
						</ul>
				</Col>
				<Col xs={6}>
					<StepperButton  to="/checkout/dough">PREV</StepperButton>
				</Col>
				<Col xs={6}>
					<StepperButton  to="/checkout/review">NEXT</StepperButton>
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
}

const mapStateToProps = state => ({
	myIngredients : state.ingredients.myIngredients,
})

const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{
			addIngredient,
			removeIngredient,
		},
		dispatch,
	);



export default connect(mapStateToProps, mapDispatchToProps)(IngredientsStep);