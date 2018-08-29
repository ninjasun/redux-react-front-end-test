import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {Home, Checkout, NotFound } from './components'

export const Routes = () => (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/checkout/:step" component={Checkout} />
				<Route exact path="/checkout" render={() => <Redirect to="/checkout/dough"/>}/>
				<Route path="/:randomUrl" component={NotFound} />
			</Switch>
)

export default Routes;