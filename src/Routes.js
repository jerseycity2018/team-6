import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './homeComponent/home';
import produce from './landingPage/produce';
<<<<<<< HEAD
=======
import landingPage from './landingPage/landingPage';
<<<<<<< HEAD
import UserContributions from './landingPage/usercontributions';
=======
>>>>>>> master
>>>>>>> 3928118b9f75a4816b323950e6c524e7f83b1190

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
<<<<<<< HEAD
					<Route exact path='/usercontributions' component={UserContributions}/>

=======
>>>>>>> master
>>>>>>> 3928118b9f75a4816b323950e6c524e7f83b1190
				</Switch>
			</main>
		);
	}
};

export default Routes;