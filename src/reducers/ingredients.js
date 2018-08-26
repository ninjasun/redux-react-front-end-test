
const initialState = [
	
]

export default ( state = initialState, action) =>{
	switch(action.type){
		case 'GET_INGREDIENTS':
			return state;
		case 'ADD_INGREDIENT':
			return [...state, { id: action.id, price: action.price, }]
		case 'REMOVE_INGREDIENT':
			return [...state]
		default:
			return state;
	}
}



export const getIngredients = () => ({
	type: 'GET_INGREDIENTS',
})


export const addIngredient = ({ id,  price }) => ({
	type: 'ADD_INGREDIENT',
	id,
	price,
})


export const removeIngredient = ({ id }) => ({
	type: 'REMOVE_INGREDIENT',
	id,
})