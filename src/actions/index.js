
import {
	FETCH_DOUGHS_REQUEST,
	FETCH_DOUGHS_SUCCESS,
} from '../reducers/doughs'

import { fetchDoughsTypes } from '../API_MOCK'


function requestDoughs(){
	return{
		type: FETCH_DOUGHS_REQUEST,
	}
}

function receiveDoughs(doughs){
	console.log("doughs is: ", doughs)
	return{
		type: FETCH_DOUGHS_SUCCESS,
		items: doughs,
	}
}

export function fetchDoughs(){
	console.log("fetching")
	return dispatch => {
		dispatch(requestDoughs())
		return fetchDoughsTypes()
		.then(doughs => dispatch(receiveDoughs(doughs)))
	}
}