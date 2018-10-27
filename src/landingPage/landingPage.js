import React, {Component} from 'react';
import Produce from './produce';
import NavigationBar from '../homeComponent/navbar';
import Event from './event';
import './landingPage.css';

class landingPage extends Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div className = 'landingPage'>
				<div>
					<NavigationBar />
					<Produce />
					<hr/>
					<h1 className="heading2">Events</h1>
					<div className="event">
						<Event/>
					</div>
				</div>
			</div>
		);
	}
}

export default landingPage;

