import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
 import firebase from './firebase';


const cards = (foodName, foodImage) => {
	return (
		<div>
			<Card style={{boxShadow: '0 4px 2px -2px gray'}}>
	        	<CardImg top width="100%"
	        		style={{ width: '100%', height: '300px', objectFit: 'cover'}}
	        		src={foodImage} alt="Card image cap" />
	      		<CardTitle
	      			style={{padding: '10px',fontFamily: 'Noto Serif'}}
		      		>{foodName}</CardTitle>
	      	</Card>
		</div>
	)
}

class FoodItem extends Component {
	constructor() {
		super();
		this.state = {
			foodImage: "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",
			foodName:"",
			items: []
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
  		this.setState({
    		[e.target.name]: e.target.value
  		});
	}
	componentDidMount() {
		// const itemsRef1 = firebase.database().ref('items');
		//   const item = {
		//     foodImage: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/carrots.jpg?itok=Hgv8pUt7",
		// 	foodName:"Carrot"
		//   }

		//   itemsRef1.push(item);
		//   // this.setState({
		//   //   currentItem: '',
		  //   username: ''
		  // });
  		const itemsRef = firebase.database().ref('items');
  		itemsRef.on('value', (snapshot) => {
    	let items = snapshot.val();
    	let newState = [];
    	for (let item in items) {
      		newState.push(
      			cards(items[item].foodName,items[item].foodImage));

    
    	}
    	this.setState({
      		items: newState
    	});
  	});
	}

	render(){
		let items = [];

		return (
			<div className = 'FoodItem'>
				<CardColumns>
					{this.state.items}
				</CardColumns>
			</div>
		);
	}
}

export default FoodItem;

