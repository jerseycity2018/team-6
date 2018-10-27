import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import produce from './landingPage/produce';
import landingPage from './landingPage/landingPage';
import UserContributions from './landingPage/usercontributions';

class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/home' component={home}/>
					<Route exact path='/landingPage' component={landingPage}/>
					<Route exact path='/usercontributions' component={UserContributions}/>

				</Switch>
			</main>
		);
	}
};

export default Routes;