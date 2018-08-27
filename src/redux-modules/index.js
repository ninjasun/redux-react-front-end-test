import { combineReducers } from 'redux';
import ingredients from './ingredients';
import dough from './dough';
import stepper from './stepper';

export default combineReducers({
	dough,
	ingredients,
	stepper,
})