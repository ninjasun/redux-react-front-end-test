import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import Checkout from '../Checkout';
import NotFound from '../NotFound';


const Root = ({ store }) => (
		<Provider store={store}>
			<div>
				<header className="header" />
				<Router>
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/checkout/:step" component={Checkout} />
						<Route path="/checkout" render={() => <Redirect to="/checkout/dough"/>}/>
						<Route path="/:randomUrl" component={NotFound} />
					</Switch>
				</Router>
				<footer className="footer"/>
			</div>
		</Provider>
	)

export default Root;