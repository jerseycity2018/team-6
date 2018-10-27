import React, {Component} from 'react';
import NavigationBar from './navbar';
import { UncontrolledCarousel, Container, Row, Col } from 'reactstrap';
import './home.css';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1454579943364-13b2d508c27a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67dd20a992371ea2aa9ba46414a66988&auto=format&fit=crop&w=1950&q=80',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Mission Statement'
  }
];


class home extends Component {
    render() {
        return (
            <div>
            	<NavigationBar />
                <div>
                	<UncontrolledCarousel items={items} />
                </div>
                <div>
                	
                	<Container>
                		<Row>
                			<Col sm="12" md={{ size: 6, offset: 3 }}>
                				<h1 className="heading">About Us</h1>
                			</Col>
                		</Row>
				        <Row className="subheading">
				          <Col sm="6" xs="12">
				          	<h2 className="sub">Mission</h2>
				          	<p>
	                			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
	                		
	                		</p>

	                		<h2 className="sub">Community</h2>
	                		<p>
	                			Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
	                			 Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	                		</p>
				          </Col >
				          <Col sm="6" xs="12">
				          	<img className="img" src='https://pbs.twimg.com/profile_images/935880969470533632/KprX4QLZ_400x400.jpg' alt=""/>
				          </Col>
				        </Row>
				    </Container>
                </div>
            </div>
        );
    }
};

export default home;
