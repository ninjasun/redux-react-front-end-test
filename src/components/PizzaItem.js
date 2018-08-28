import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CheckBox } from './';


const PizzaItem = ({ isSelected, item, onChange, type, role}) => {


	const renderCheckBox = () => {
		return <CheckBox 
					type={type}
					checked={isSelected} 
					name={item.name}  
					value={item.id}  
					onChange={(e) => {onChange(e, item)}} 
				/>
	}

	const renderRadio = () => {
		return <input 
					type={type}
					value={item.id} 
					checked={isSelected} 
					onChange={() =>{onChange(item)}} 
				/>
	}


	return (
		<li className={isSelected ? "pizza-item selected" : 'pizza-item'} key={item.id} tabIndex="0" role={role}>
			<label>
				{type === 'checkbox' ? renderCheckBox() : renderRadio()}
				<span className="item-info" >{item.name}</span>
				<span className="item-price" >{item.price} $</span>
			</label>
		</li>
	)
}


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