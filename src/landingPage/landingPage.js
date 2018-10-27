import React, {Component} from 'react';
import Produce from './produce';
import NavigationBar from '../homeComponent/navbar';

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
				</div>
			</div>
		);
	}
}

export default landingPage;

