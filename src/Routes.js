import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import LandingPage from './landingPage/landingPage';
import event from './landingPage/event';
import UserContributions from './landingPage/usercontributions';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/home' component={home}/>
					<Route exact path='/landingpage' component={LandingPage}/>
					<Route exact path='/usercontributions' component={UserContributions}/>
					<Route exact path='/event' component={event}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;