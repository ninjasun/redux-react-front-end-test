import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { StepperButton } from './';


const Home = ({history}) => {
	const next = () => {
		history.push("/checkout/dough")
	}

	return(
		<Grid>
			<Row>
				<Col xs={12} style={{'textAlign': 'center'}}>
					<h1 style={{'marginBottom':'200px', 'marginTop':'100px'}}>Welcome to pizza experience</h1>
					<StepperButton onClick={next}>ORDER</StepperButton>
				</Col>
			</Row>
		</Grid>
	)
}


Home.propTypes = {
	history: PropTypes.object.isRequired,
}

export default withRouter(Home);