import React, {Component} from 'react';
import Produce from './produce';
import NavigationBar from '../homeComponent/navbar';
import HoverStripedTable from './event';


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
					<HoverStripedTable />
				</div>
			</div>
		);
	}
}

export default landingPage;

