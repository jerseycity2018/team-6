import React from 'react';
import './announcements.css';

class Announcements extends React.Component {
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
		const announcementsList = this.state.items.map(item => <li>{item}</li>)
		return (
			<div className = 'announcements'>
				<header> 
					<div className = 'wrapper'>
						<h1 className="announcement"> Announcements </h1> 
					</div>
				</header>
				<body>
					<div class = 'green-box'>
						<h3>Updates about today's evening yoga class at 6:30 pm</h3>
						<p>Class is cancelled</p>
					</div>
					<div class = 'green-box'>
						<h3>Exciting news about opening another farm location in West 
							8th Street, Brooklyn area</h3>
							<p>Please, come, check it out, and volunteer at our recently
								opened farm in Brooklyn!</p>
					</div>
				</body>
			</div>
		);
  }  
}
export default Announcements;
