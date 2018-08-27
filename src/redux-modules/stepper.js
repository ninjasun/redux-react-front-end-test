
const initialState =  [
		{ name: 'dough', completed: false },
		{ name: 'ingredients', completed: false },
		{ name: 'review', completed: false },
	];

 export default ( state = initialState, action) => {
	switch(action.type){
		case 'SET_STEP_COMPLETED':
			console.log("SET STEP COMPLETED: ",action)
			return state.map( step =>
				(step.name === action.name) ? {...step, completed: true} : step)
		default:
			return state;
	}
}


export const setStepCompleted = (name) => ({
	type: 'SET_STEP_COMPLETED',
	name,
})
