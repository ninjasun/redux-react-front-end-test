import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Routes from '../Routes';


const Root = ({ store, persistor }) => (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<div>
						<header className="header" >
							<Link to="/" className="logo">JUST PIZZA</Link>
						</header>
						<Routes />
						<footer className="footer"/>
					</div>
				</Router>
			</PersistGate>
		</Provider>
	)

Root.proptTypes = {
	store: PropTypes.object.isRequired,
	persistor: PropTypes.object,
}

export default Root;