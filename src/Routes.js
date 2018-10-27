import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={home}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;