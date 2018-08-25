import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import  { fetchDoughtTypes }  from './API_MOCK';
/*
	load and display data from API: impasto
	load current pizza 
	display a form
*/

class DoughStep extends Component {
	constructor(){
		super();
		this.state = {
			doughTypes : [],
		}
	}
	componentDidMount(){
		var doughTypes = fetchDoughtTypes();
		this.setState({
			doughTypes : doughTypes,
		})
	}

	render(){

		return(
			<Row>
				<Col xs={12}>
					<h1>Choose your dough types</h1>
				</Col>
				<Col xs={12}>
					<ul>
					{this.state.doughTypes.map( item => 
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

export default DoughStep;