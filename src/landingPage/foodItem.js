import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

class FoodItem extends Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
	}

	render(){
		return (
			<div className = 'FoodItem'>
				<CardColumns>
					<Card>
			        	<CardImg top width="100%"
			        		style={{ width: '100%', height: '300px' }}
			        		src="https://www.potato.ie/media/1047/potato11.jpg?anchor=center&mode=crop&width=650&height=345&rnd=130880311760000000&Format=Jpeg" alt="Card image cap" />
			      		<CardTitle
			      			style={{padding: '10px',fontFamily: 'Noto Serif'}}
			      		>Potatos</CardTitle>
			      	</Card>
			      	<Card>
			        	<CardImg top width="100%" 
			        	style={{ width: '100%', height: '300px' }}
			        	src="https://www.healthline.com/hlcmsresource/images/AN_images/AN313-Tomatoes-732x549-Thumb.jpg" alt="Card image cap" />
			      		<CardTitle
			      		style={{padding: '10px',fontFamily: 'Noto Serif'}}
			      		>Tomatoes</CardTitle>
			      	</Card>
			      	<Card>
			        	<CardImg top width="100%" 
			        		style={{ width: '100%', height: '300px' }}
			        		src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/carrots.jpg?itok=Hgv8pUt7" alt="Card image cap" />
			      		<CardTitle
			      			style={{padding: '10px',fontFamily: 'Noto Serif'}}
			      		>Carrot</CardTitle>
			      	</Card>
				</CardColumns>
			</div>
		);
	}
}

export default FoodItem;

