import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import produce from './landingPage/produce';
<<<<<<< HEAD
=======
import landingPage from './landingPage/landingPage';
>>>>>>> master

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/home' component={home}/>
<<<<<<< HEAD
					<Route exact path='/produce' component={produce}/>
=======
					<Route exact path='/landingPage' component={landingPage}/>
>>>>>>> master
				</Switch>
			</main>
		);
	}
};

export default Routes;