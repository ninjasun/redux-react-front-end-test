
const initialState = {
	doughId : 1
}

 export default ( state = initialState, action) => {
	switch(action.type){
		case 'GET_DOUGH':
			return state;
		case 'SET_DOUGH':
			console.log("SET_DOUGH: ", action)
			return {...state, doughId: action.doughId}
		default:
			return state;
	}
}


export const getDough = () => ({
	type: 'GET_DOUGH',
})


export const setDoughType = (doughId) => ({
	type: 'SET_DOUGH',
	doughId: doughId,
})

