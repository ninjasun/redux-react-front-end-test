
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { StepperButton } from './'


const Home = () => {
	return(
		<Grid>
			<Row>
				<Col>
					<h1>Welocome to pizza experience</h1>
					<StepperButton to="/checkout">ORDER</StepperButton>
				</Col>
			</Row>
		</Grid>
	)
}

export default Home;