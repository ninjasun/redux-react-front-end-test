import { combineReducers } from 'redux';
import ingredients from './ingredients';
import dough from './dough';


export default combineReducers({
	dough,
	ingredients,
})