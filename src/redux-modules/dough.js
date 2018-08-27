
const initialState = {
	myDough : {},
}

 export default ( state = initialState, action) => {
	switch(action.type){
		case 'GET_DOUGH':
			return state;
		case 'SET_DOUGH':
			return {...state, myDough: action.dough}
		default:
			return state;
	}
}


export const getDough = () => ({
	type: 'GET_DOUGH',
})


export const setDoughType = (dough) => ({
	type: 'SET_DOUGH',
	dough: dough,
})

