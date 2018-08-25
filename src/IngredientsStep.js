import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import  { fetchIngredients }  from './API_MOCK';
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

	render(){

		return(
			<Row>
				<Col xs={12}>
					<h1>Choose your ingredients</h1>
				</Col>
				<Col xs={12}>
					<ul>
					{this.state.ingredients.map( item => 
						<li key={item.id}>
							<span>{item.name}</span>
						</li>
						)}
					</ul>
				</Col>
			</Row>
		)
	}
}

export default IngredientsStep;