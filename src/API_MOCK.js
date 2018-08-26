const fetchDoughsTypes = function(){
	return [
		{
			id: 1,
			name: 'Thin',
			description: 'Thin and crusty pizza dought',
			price: '3.50',
		},
		{
			id: 2,
			name: 'Thick',
			description: 'Thick and soft pizza dough',
			price: '3.50',
		},
		{
			id: 3,
			name: 'Thick x2',
			description: 'Double thick and soft pizza dough',
			price: '5.50',
		},
		{
			id: 4,
			name: 'Thin x2',
			description: 'Double thin and soft pizza dough',
			price: '5.50',
		},
		{
			id: 5,
			name: 'whole wheat',
			description: 'Whole wheat pizza dough',
			price: '4.00',
		}
	]
}


const fetchIngredients = function(){
	return [
		{
			id: 6,
			name: 'Tomato',
			description: '',
			price: '0.50',
		},
		{
			id: 7,
			name: 'Mozzarella',
			description: '',
			price: '0.50',
		},
		{
			id: 8,
			name: 'Sausage',
			description: '',
			price: '0.50',
		},
		{
			id: 9,
			name: 'Pepperoni',
			description: '',
			price: '0.50',
		},
		{
			id: 10,
			name: 'Wurstel',
			description: '',
			price: '0.50',
		},
	]
}


export { 
	fetchDoughsTypes,
	fetchIngredients,
};