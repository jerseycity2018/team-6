import React, {Component} from 'react';
import FoodItem from './foodItem';
import './foodItem.css';

class Produce extends Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
	this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
  		this.setState({
    	[e.target.name]: e.target.value
 	 	});
	}

	render(){
		return (
			<div className = 'produce'>
				<header> 
					<div className = 'wrapper'>
						<h1 className="prohead"> Produce Currently Available </h1> 
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

