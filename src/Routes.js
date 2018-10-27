import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import produce from './landingPage/produce';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/home' component={home}/>
					<Route exact path='/produce' component={produce}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;