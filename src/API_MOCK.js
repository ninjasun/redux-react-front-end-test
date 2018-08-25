const fetchDoughtTypes = function(){
	return [
		{
			id: 1,
			name: 'Thin',
			description: 'Thin and crusty pizza dought'
		},
		{
			id: 2,
			name: 'Thick',
			description: 'Thick and soft pizza dough'
		}
	]
}


const fetchIngredients = function(){
	return [
		{
			id: 3,
			name: 'Tomato',
			description: ''
		},
		{
			id: 5,
			name: 'Mozzarella',
			description: ''
		},
		{
			id: 6,
			name: 'Sausage',
			description: ''
		},
		{
			id: 4,
			name: 'Pepperoni',
			description: ''
		},
		{
			id: 7,
			name: 'Wurstel',
			description: ''
		},
	]
}


export { 
	fetchDoughtTypes,
	fetchIngredients,
};