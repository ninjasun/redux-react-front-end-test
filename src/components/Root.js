import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home, NotFound, Checkout } from './';


const Root = ({ store }) => (
		<Provider store={store}>
			<Router>
				<div>
					<header className="header" >
						<Link to="/" className="logo">JUST PIZZA</Link>
					</header>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/checkout/:step" component={Checkout} />
						<Route path="/checkout" render={() => <Redirect to="/checkout/dough"/>}/>
						<Route path="/:randomUrl" component={NotFound} />
					</Switch>
					<footer className="footer"/>
				</div>
			</Router>
		</Provider>
	)

Root.proptTypes = {
	store: PropTypes.object.isRequired,
}

export default Root;