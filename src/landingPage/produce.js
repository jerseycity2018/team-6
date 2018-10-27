import React, {Component} from 'react';
import FoodItem from './foodItem';
import './foodItem.css';
import firebase from './firebase.js';

class Produce extends Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
  		this.setState({
    	[e.target.name]: e.target.value
 	 	});
	}

	handleSubmit(e) {
  		e.preventDefault();
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

