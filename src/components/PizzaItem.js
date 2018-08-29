import React from 'react';
import PropTypes from 'prop-types';


const PizzaItem = ({ isSelected, item, onChange, type}) =>  (
		<li className={isSelected ? "pizza-item selected" : 'pizza-item'} key={item.id} tabIndex="0" role={type}  >
			<label onChange={(e) => {onChange(e, item)}} >
				<input 
					type={type}
					id={"pizza-item-"+ item.id}
					value={item.id} 
					checked={isSelected} 
					onChange={() =>{}}
				/>
				<span className="item-info" >{item.name}</span>
				<span className="item-price" >{item.price} $</span>
			</label>
		</li>
	)


PizzaItem.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name:PropTypes.string.isRequired,
		description: PropTypes.string,
		price:PropTypes.string.isRequired,
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	role: PropTypes.string,
}

export default PizzaItem;