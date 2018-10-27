import React, {Component} from 'react';

class produce extends Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
	}

	render(){
		const produceList = this.state.items.map(item => <li>{item}</li>)
		return (
			<div className = 'produce'>
				<header> 
					<div className = 'wrapper'>
						<h1> Produce Currently Available </h1> 
					</div>
				</header>
				<div className = 'container'>
					<section className = 'display-item'>
						<div className = 'wrapper'>
							<ul>
								{produceList}
							</ul>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default produce;

