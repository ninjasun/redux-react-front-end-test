/*
* if id is included into myIngredients return true else false
*/
export const includes = (item, myIngredients ) => {
		//const { myIngredients } = this.props;

		if (myIngredients.lenght === 0) return false;

		var found = myIngredients.find( (ingredient) => {
			return ingredient.id === item.id;
		});
		
		if (found) return true;
			else return false;
	}