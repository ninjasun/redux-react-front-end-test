

import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';

import './App.css';
import pizzaOrderApp from './reducers';
import Root from './components/Root';


const store = createStore(pizzaOrderApp);


render(
  <Root store={store} />,
  document.getElementById('root')
)
registerServiceWorker();
