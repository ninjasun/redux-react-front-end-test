import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


function OrderCard({dough, ingredients, price}){
	return (
		<Col xs={12} >
			<div className="order-card-container">
				<p className="info">{dough.description}</p>
				<ul className="list-container" aria-labelledby="order_review">
					{ingredients.map( item =>
						<li key={item.id}>+ {item.name}</li>
					)}
				</ul>
				<p className="price">{price}</p>
			</div>
		</Col>
	)
}

OrderCard.propTypes = {
	
	ingredients: PropTypes.array,
	price: PropTypes.string.isRequired,
}

export default OrderCard;