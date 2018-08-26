import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { Row, Col } from 'react-bootstrap';
import  { fetchDoughsTypes }  from './API_MOCK';
import { setDoughType } from './reducers/dough';
/*
	load and display data from API: impasto
	load current pizza 
	display a form
*/

class DoughStep extends Component {
	constructor(){
		super();
		this.state = {
			doughs : [],
		}
	}


	componentDidMount(){
		const doughs = fetchDoughsTypes();
		this.setState({
			doughs : doughs,
		})
	}


	handleDoughChange = (event) => {
		
		this.props.setDoughType(parseInt(event.target.value))
	
	}


	render(){
		console.log("state: ", this.state)
		console.log("props: ", this.props)
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
								<input type="radio" value={item.id} checked={item.id === this.props.doughId} onChange={this.handleDoughChange} />
								{item.name}
								{item.description}
								{item.price} $
							</label>
						</div>
						)}
					</form>
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = state => ({
	doughId : state.dough.doughId,
})

const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{
			setDoughType,
		},
		dispatch,
	);



export default connect(mapStateToProps, mapDispatchToProps)(DoughStep);