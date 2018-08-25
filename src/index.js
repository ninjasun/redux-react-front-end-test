import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App'
import Checkout from './Checkout';
import NotFound from './NotFound';

ReactDOM.render(
		<div>
			<header className="header" />
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/checkout/:step" component={Checkout} />
					<Route path="/checkout" render={() => <Redirect to="/checkout/step1"/>}/>
					<Route path="/:randomUrl" component={NotFound} />
				</Switch>
			</Router>
			<footer className="footer"/>
		</div>
		, document.getElementById('root'));
registerServiceWorker();
