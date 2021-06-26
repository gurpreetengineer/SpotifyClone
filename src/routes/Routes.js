import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from '../components/loginPage/LoginPage';

function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={LoginPage} />
		</Switch>
	);
}

export default Routes;
