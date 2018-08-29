import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import './App.css';
import  pizzaOrderApp from './redux-modules';
import { Root } from './components/';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, pizzaOrderApp);

const store = createStore(persistedReducer);

const persistor = persistStore(store);


render(
  <Root store={store} persistor={persistor}/>,
  document.getElementById('root')
)
registerServiceWorker();
