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
							  Raise awareness and promote the program, maintain the NYCHA residents's initial commitment to their behavior changes, 
							  and incentivize continued use of the platform and engagement with GCF’s programs. 
							  Empower and encourage the users to meet their needs by using reward programs and leader board system to keep track of their participation in the program.
	                		
	                		</p>

	                		<h2 className="sub">Community</h2>
	                		<p>
							GCF is an AmeriCorps Nonprofit organization founded in 2009. 
							GCF works in close collaboration with the NYC Housing Authority (NYCHA) to engage 18-24 year old residents in training and service projects that give them the skills and certifications required to access careers in the sustainable economy. 
							Since inception, GCF has engaged over 550 young adults in service, and celebrates an alumni network of 400+. 
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
