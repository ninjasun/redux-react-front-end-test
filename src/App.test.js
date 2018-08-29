import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Routes } from './Routes';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { MemoryRouter } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { DoughStep } from './containers/DoughStep';
import { StepperProgress } from './containers/StepperProgress';
import { Checkout } from './components/Checkout';

import  pizzaOrderApp from './redux-modules';

import { setStepCompleted } from './redux-modules/stepper';
import { setDoughType, SET_DOUGH } from './redux-modules/dough';
import { addIngredient, ADD_INGREDIENT, REMOVE_INGREDIENT } from './redux-modules/ingredients';
import  ingredientsReducer from './redux-modules/ingredients';



const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, pizzaOrderApp);

const store = createStore(persistedReducer);

const persistor = persistStore(store);



it('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={store} persistor={persistor} />, div);
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

describe('******* ROUTING ********', () => {
	//console.log("store is: ", store.getState())
	const store = createStore(pizzaOrderApp);
	
  	const renderRoute = path => 
  		mount(
  			<Provider store={store}>
  				<MemoryRouter initialEntries={[path]}>
  					<Routes />
  				</MemoryRouter>
  			</Provider>
  		);
  	it('should render Home according to the route /', () =>{
		const wrapper = renderRoute('/')
		expect(wrapper.find('h1').text()).toEqual('Welcome to the pizza experience');
	})

	it('should render DoughStep according to the route /checkout', () =>{
		const wrapper = renderRoute('/checkout')
		expect(wrapper.find('h1').text()).toEqual('Choose your dough type');
	})

	it('should render DoughStep according to the route /checkout/dough', () =>{
		const wrapper = renderRoute('/checkout/dough')
		expect(wrapper.find('h1').text()).toEqual('Choose your dough type');
	})

	it('should redirect and render DoughStep according to the route /checkout/ingredients', () =>{
		const wrapper = renderRoute('/checkout/ingredients')
		expect(wrapper.find('h1').text()).toEqual('Choose your dough type');
	})

	it('should redirect and render DoughStep according to the route /checkout/review', () =>{
		const wrapper = renderRoute('/checkout/review')
		expect(wrapper.find('h1').text()).toEqual('Choose your dough type');
	})


});


describe('******* ROUTING step 1 is completed ********', () => {
	
	const store = createStore(pizzaOrderApp);
	//console.log("store is: ", store.getState())
	store.dispatch(setStepCompleted('dough'));

  	const renderRoute = path => 
  		mount(
  			<Provider store={store}>
  				<MemoryRouter initialEntries={[path]}>
  					<Routes />
  				</MemoryRouter>
  			</Provider>
  		);

	it('should redirect and render IngredientsStep according to the route /checkout/review', () =>{
		const wrapper = renderRoute('/checkout/review')
		expect(wrapper.find('h1').text()).toEqual('Choose your ingredients');
	})

  	//console.log("store is: ", store.getState())

  	it('should  render IngredientsStep according to the route /checkout/ingredients', () =>{
		const wrapper = renderRoute('/checkout/ingredients')
		expect(wrapper.find('h1').text()).toEqual('Choose your ingredients');
	})

});


describe('******* ROUTING step 2 is completed ********', () => {
	
	const store = createStore(pizzaOrderApp);
	//console.log("store is: ", store.getState())
	store.dispatch(setStepCompleted('dough'));
	store.dispatch(setStepCompleted('ingredients'));
  	const renderRoute = path => 
  		mount(
  			<Provider store={store}>
  				<MemoryRouter initialEntries={[path]}>
  					<Routes />
  				</MemoryRouter>
  			</Provider>
  		);

	it('should render ReviewStep according to the route /checkout/review', () =>{
		const wrapper = renderRoute('/checkout/review')
		expect(wrapper.find('h1').text()).toEqual('Order review');
	})

  	//console.log("store is: ", store.getState())

  	it('should render IngredientsStep according to the route /checkout/ingredients', () =>{
		const wrapper = renderRoute('/checkout/ingredients')
		expect(wrapper.find('h1').text()).toEqual('Choose your ingredients');
	})

});