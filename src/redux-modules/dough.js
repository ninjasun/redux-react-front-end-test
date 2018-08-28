export const SET_DOUGH = "SET_DOUGH";


const initialState = {
	myDough : {},
}

 export default ( state = initialState, action) =>{
	switch(action.type){
		case SET_DOUGH:
			return {...state, myDough: action.dough}
		default:
			return state;
	}
}


export const setDoughType = (dough) => ({
	type: SET_DOUGH,
	dough: dough,
})

