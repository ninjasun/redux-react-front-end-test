
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { StepperButton } from './';


const Home = (props) => {
	const next = () => {
		props.history.push("/checkout/dough")
	}

	return(
		<Grid>
			<Row>
				<Col xs={12} style={{'textAlign': 'center'}}>
					<h1>Welcome to pizza experience</h1>
					<StepperButton onClick={next}>ORDER</StepperButton>
				</Col>
			</Row>
		</Grid>
	)
}

export default withRouter(Home);