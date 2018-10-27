import React, {Component} from 'react';
<<<<<<< HEAD

class produce extends Component {
=======
import FoodItem from './foodItem';
import './foodItem.css';
import firebase from './firebase.js';

class Produce extends Component {
>>>>>>> master
	constructor() {
		super();
		this.state = {
			items: []
		}
<<<<<<< HEAD
=======
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
>>>>>>> master
	}

	render(){
		const produceList = this.state.items.map(item => <li>{item}</li>)
		return (
			<div className = 'produce'>
				<header> 
					<div className = 'wrapper'>
<<<<<<< HEAD
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
=======
						<h1 className="heading prohead"> Produce Currently Available </h1> 
					</div>
				</header>
				<div className="foodContainer">
					<FoodItem />
>>>>>>> master
				</div>
			</div>
		);
	}
}

<<<<<<< HEAD
export default produce;
=======
export default Produce;
>>>>>>> master

