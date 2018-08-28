import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore } from 'redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

import { DoughStep } from './containers/DoughStep';

//import  ConnectedDoughStep  from './containers/';
import  pizzaOrderApp from './redux-modules';

import { setDoughType, SET_DOUGH } from './redux-modules/dough';
import { addIngredient, ADD_INGREDIENT, REMOVE_INGREDIENT } from './redux-modules/ingredients';
import  ingredientsReducer from './redux-modules/ingredients'

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(pizzaOrderApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe('dough actions', () => {
  it('should create an action to set a dough', () => {
    const dough = {
    	id: 1,
    	name: "test dough",
    	description: "random text",
    	price: '3.50'
    }

    const expectedAction = {
      type: SET_DOUGH,
      dough
    }
    expect(setDoughType(dough)).toEqual(expectedAction)
  })
})


describe('ingredients actions', () => {
  it('should create an action to add an ingredient', () => {
    const item = {
    	id: 4,
    	name: "test ingredient",
    	description: "random text",
    	price: '0.50',
    }

    const expectedAction = {
      type: ADD_INGREDIENT,
      item
    }
    expect(addIngredient(item)).toEqual(expectedAction)
  })
})

describe('ingredients reducer', () => {
	it('should handle ADD_INGREDIENT', () => {

		const item = {
	    	id: 4,
	    	name: "test ingredient",
	    	description: "random text",
	    	price: '0.50',
    	};
	    const initialState = { myIngredients:[] };
	    const action = {
				type: ADD_INGREDIENT,
				item: item,
			};

		expect(
			ingredientsReducer( initialState, action ))
		.toEqual({
			myIngredients:[{
			    	id: 4,
			    	name: "test ingredient",
			    	description: "random text",
			    	price: '0.50',
		   		}]
			}
		)
	})
})

describe('ingredients reducer', () => {
	it('should handle REMOVE_INGREDIENT', () => {

		const item = {
	    	id: 4,
	    	name: "test ingredient",
	    	description: "random text",
	    	price: '0.50',
    	}
    	const initialState = {
			myIngredients:[{
			    	id: 4,
			    	name: "test ingredient",
			    	description: "random text",
			    	price: '0.50',
		   		}]
			};
	    const finalState = {myIngredients:[]};
	    const action = {
				type: REMOVE_INGREDIENT,
				id: 4,
			}

		expect(
			ingredientsReducer( initialState, action ))
		.toEqual(finalState)
	})
})



describe('Component DoughStep ', () => {

	function setup() {
	  const props = {
	    stepper: [{completed:true}],
	    setDoughType: jest.fn(),
	    setStepCompleted: jest.fn(),
	    myDough: {id:2, name:'thin',description:'thin soft dough',price:'3.50'},
	    history: {},
  	};
  	const enzymeWrapper = mount(<DoughStep {...props} />)
	return {
	    props,
	    enzymeWrapper
	  }
	}

	const { enzymeWrapper } = setup();

  it("should render self, a title and a list container", () => {
  	
  	expect(enzymeWrapper.find('h1').text()).toBe('Choose your dough type');
  	expect(enzymeWrapper.find('ul').hasClass('list-container')).toBe(true);
  })

  it("should render 5 list element from the state ", () => {
 	enzymeWrapper.instance().componentDidMount();
 	expect(enzymeWrapper.state('doughs').length).toEqual(5);
  	
  })

  it("should have the radio button with id/value 2 checked ", () => {
	


  })
  
  

  
});

