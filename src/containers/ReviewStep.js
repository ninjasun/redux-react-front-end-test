import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StepperButton } from '../components/';
import { Row, Col } from 'react-bootstrap';



const ReviewStep = (props) => {
	console.log("PROPS: ", props)
	const onSubmit = () => {
		
	}
	return(
		<Row>
			<Col xs={12}>
				<h1>order review</h1>
			</Col>
			<Col xs={12}>
				<p>{props.myDough.name}</p>
			</Col>
			<Col xs={12}>
				<ul>
					{props.myIngredients.map( item =>
						<li key={item.id}>{item.name}</li>
					)}
				</ul>
			</Col>
			<Col xs={6}>
				<StepperButton  to="/checkout/ingredients">PREV</StepperButton>
			</Col>
			<Col xs={6}>
				<button type="button" onClick={onSubmit}>SUBMIT</button>
			</Col>
		</Row>
	)
}



const mapStateToProps = state => ({
	myIngredients : state.ingredients.myIngredients,
	myDough: state.dough.myDough,
})


// const mapDispatchToProps = dispatch => 
// 	bindActionCreators(
// 		{
// 			submitOrder,
// 		},
// 		dispatch,
// 	);



export default connect(mapStateToProps)(ReviewStep);
