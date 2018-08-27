import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home, NotFound, Checkout } from './';


const Root = ({ store }) => (
		<Provider store={store}>
			<div>
				<header className="header" />
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/checkout/:step" component={Checkout} />
						<Route path="/checkout" render={() => <Redirect to="/checkout/dough"/>}/>
						<Route path="/:randomUrl" component={NotFound} />
					</Switch>
				</Router>
				<footer className="footer"/>
			</div>
		</Provider>
	)

Root.proptTypes = {
	store: PropTypes.object.isRequired,
}

export default Root;