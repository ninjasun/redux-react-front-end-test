export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';


const initialState = {
	myIngredients : [],
}


export default  ( state = initialState, action) => {
	switch(action.type){
		case ADD_INGREDIENT:
			return {
				...state,
				 myIngredients: [...state.myIngredients, action.item]
			}
		case REMOVE_INGREDIENT:
			return {
				...state,
				myIngredients: state.myIngredients.filter(item => action.id !== item.id)
			}
		default:
			return state;
	}
}


export const addIngredient = (item) => ({
	type: ADD_INGREDIENT,
	item,
})


export const removeIngredient = (id) => ({
	type: REMOVE_INGREDIENT,
	id,
})