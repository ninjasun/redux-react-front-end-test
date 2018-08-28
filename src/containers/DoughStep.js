import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
	
import { StepperButton } from '../components/';
import { Row, Col } from 'react-bootstrap';
import  { fetchDoughsTypes }  from '../API_MOCK';
import { setDoughType } from '../redux-modules/dough';
import { setStepCompleted } from '../redux-modules/stepper';

/*
	first step. Choose a dough type
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
		this.props.setDoughType(item);
		this.props.setStepCompleted('dough');
	}


	isDisabled = () => {
		return !this.props.stepper[0].completed;
	}


	next = () => {
		this.props.history.push("/checkout/ingredients");
	}


	isSelected = (id) =>{
		return id === this.props.myDough.id;
	}


	render(){
		
		return(
			<Row className="step-container">
				<Col xs={12}>
					<h1>Choose your dough type</h1>
				</Col>
				<Col xs={12}>
					<ul className="list-container" aria-labelledby="radio_group_doughs">
					{this.state.doughs.map( item => 
						<li className={this.isSelected(item.id) ? "pizza-item selected" : 'pizza-item'} key={item.id} tabIndex="0" role="radio">
							<label>
								<input type="radio" value={item.id} checked={this.isSelected(item.id)} onChange={() =>{this.handleDoughChange(item)}} />
								<span className="item-info" >{item.description}</span>
								<span className="item-price" >{item.price} $</span>
							</label>
						</li>
						)}
					</ul>
				</Col>
				<Col xs={6} xsOffset={6} style={{"textAlign":'center'}}>
					<StepperButton onClick={this.next} disabled={this.isDisabled()}>NEXT</StepperButton>
				</Col>
			</Row>
			
		)
	}
}

DoughStep.propTypes = {
	myDough: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		price: PropTypes.string,
	}),
	stepper: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	myDough : state.dough.myDough,
	stepper : state.stepper,
})

const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{
			setDoughType,
			setStepCompleted,
		},
		dispatch,
	);



export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(DoughStep);