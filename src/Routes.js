import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import LandingPage from './landingPage/landingPage';
import UserContributions from './landingPage/usercontributions';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/home' component={home}/>
					<Route exact path='/landingpage' component={LandingPage}/>
					<Route exact path='/usercontributions' component={UserContributions}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;