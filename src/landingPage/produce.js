import React, {Component} from 'react';
import FoodItem from './foodItem';
import './foodItem.css';

class Produce extends Component {
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
						<h1 className="heading prohead"> Produce Currently Available </h1> 
					</div>
				</header>
				<div className="foodContainer">
					<FoodItem />
				</div>
			</div>
		);
	}
}

export default Produce;

