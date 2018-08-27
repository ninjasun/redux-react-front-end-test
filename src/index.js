import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';

import './App.css';
import  pizzaOrderApp from './redux-modules';
import { Root } from './components/';


const store = createStore(pizzaOrderApp);


render(
  <Root store={store} />,
  document.getElementById('root')
)
registerServiceWorker();
