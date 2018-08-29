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
import { StepperProgress } from './containers/StepperProgress';
import { Checkout } from './components/Checkout';
//import  ConnectedDoughStep  from './containers/';
import  pizzaOrderApp from './redux-modules';

import { setDoughType, SET_DOUGH } from './redux-modules/dough';
import { addIngredient, ADD_INGREDIENT, REMOVE_INGREDIENT } from './redux-modules/ingredients';
import  ingredientsReducer from './redux-modules/ingredients'


Enzyme.configure({ adapter: new Adapter() });
const store = createStore(pizzaOrderApp);



it('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe('******* dough actions ********', () => {
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


describe('******** ingredients actions ***********', () => {
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

describe('****** ingredients reducer **********', () => {
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



describe('******** Component DoughStep *********', () => {

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

  it("should set state with 5 doughs", () => {
 	enzymeWrapper.instance().componentDidMount();
 	expect(enzymeWrapper.state('doughs').length).toEqual(5);
  	
  })

  it("should have the radio button with id/value 2 checked ", () => {
	const radio = enzymeWrapper.find('#pizza-item-2');
	expect(radio.props().checked).toEqual(true);

  })

  it("should have the radio button with id/value 3 not checked ", () => {
	const radio = enzymeWrapper.find('#pizza-item-3');
	expect(radio.props().checked).toEqual(false);

  })
  
  it("should set dough type with id 1", () => {
	enzymeWrapper.setProps({
		myDough:{
			id:1,
			name:"Soft",
			description: 'soft dough',
			price: '3.50'
		}
	})
	const radio = enzymeWrapper.find('#pizza-item-1');
	expect(radio.props().checked).toEqual(true);

  })

  
});

describe('******** Component StepperProgress **********', () => {
	function setup() {
	  const props = {
	    stepper: [{completed:true}, {completed:false}, {completed:false}],
	    match:{
	    	params:{
	    		step :'dough'
	    	}
	    }
  	};

  	const enzymeWrapper = mount(<StepperProgress {...props} />)
	return {
	    props,
	    enzymeWrapper
	  }
	}

	const { enzymeWrapper } = setup();

	it('should have li dough with class active ', () => {
		expect(enzymeWrapper.find('.active').text()).toEqual(' dough ')
	})

});

describe('******* Component Checkout ********', () => {

	function setup() {
	  const props = {
	    match:{
	    	params:{
	    		step :'dough'
	    	}
	    }
  	};

  	const enzymeWrapper = mount(<Checkout {...props} />)
	return {
	    props,
	    enzymeWrapper
	  }
	}

	const { enzymeWrapper } = setup();

	it('should render DoughStep according to the route', () =>{
		expect(enzymeWrapper.find('h1').text()).toBe('Choose your dough type');
	})

});