import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { StepperButton } from '../components/';
import { Row, Col } from 'react-bootstrap';
import  { fetchDoughsTypes }  from '../API_MOCK';
import { setDoughType } from '../redux-modules/dough';

/*
	load and display data from API: impasto
	load current pizza 
	display a form
*/

class DoughStep extends Component {
	constructor(){
		super();
		this.state = {
			doughs: [],
		}
	}


	componentDidMount(){
		const doughs = fetchDoughsTypes();
		this.setState({
			doughs : doughs,
		})
	}


	handleDoughChange = (item) => {
		
		this.props.setDoughType(item)
	
	}


	render(){
		//console.log("state: ", this.state)
		//console.log("props: ", this.props)
		return(
			<Row>
				<Col xs={12}>
					<h1>Choose your dough types</h1>
				</Col>
				<Col xs={12}>
					<form>
					{this.state.doughs.map( item => 
						<div className="dough-radio-item" key={item.id}>
							<label>
								<input type="radio" value={item.id} checked={item.id === this.props.myDough.id} onChange={() =>{this.handleDoughChange(item)}} />
								{item.name}
								{item.description}
								{item.price} $
							</label>
						</div>
						)}
					</form>
				</Col>
				<Col xs={12}>
					<StepperButton  to="/checkout/ingredients">NEXT</StepperButton>
				</Col>
			</Row>
		)
	}
}

DoughStep.propTypes = {
	myDough: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	}).isRequired,
}

const mapStateToProps = state => ({
	myDough : state.dough.myDough,
})

const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{
			setDoughType,
		},
		dispatch,
	);



export default connect(mapStateToProps, mapDispatchToProps)(DoughStep);