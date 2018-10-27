import React, {Component} from 'react';
import { UncontrolledCarousel, Container, Row, Col } from 'reactstrap';
import './usercontributions.css';


var DonutChart = require('react-chartjs').Doughnut;
var produceData = [
    {
        value: 12349,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "2016"
    },
    {
        value: 19920,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "2017"
    },
    {
        value: 21952,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "2018"
    }
]

var compostData = [
    {
        value: 3172,
        color:"#708090",
        highlight: "#FF5A5E",
        label: "2016"
    },
    {
        value: 5502,
        color: "#EE82EE",
        highlight: "#5AD3D1",
        label: "2017"
    },
    {
        value: 4292,
        color: "#00FF7F",
        highlight: "#FFC870",
        label: "2018"
    }
]

var volunteerData = [
    {
        value: 223,
        color:"#CD5C5C",
        highlight: "#FF5A5E",
        label: "2016"
    },
    {
        value: 449,
        color: "#8B0000",
        highlight: "#DC143C",
        label: "2017"
    },
    {
        value: 417,
        color: "#FF0000",
        highlight: "#FFC871",
        label: "2018"
    }
]

class UserContributions extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
	}


	render(){
		return (
			<div className = 'usercontribution'>

			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
					<h1 className="heading">User Contributions</h1>
					</Col>
				</Row>

				<Row className = "subheading">
					<Col>
						<h2 className="sub">Total weight of produce distributed (lbs)</h2>
					</Col>

					<Col>
						<DonutChart ref='chart' data={produceData} height={300} width={500}/>
					</Col>
				</Row>	
				<Row></Row>

				<Row className = "subheading">
					<Col>
						<h2 className="sub">Total weight of compost collected (lbs)</h2>
					</Col>
					<Col>
						<DonutChart ref='chart' data={compostData} height={300} width={500}/>
					</Col>
					
				</Row>

				<Row className = "subheading">
					<Col>
					<h2 className="sub">Total number of volunteer hours</h2>
					</Col>
					<Col>
					<DonutChart ref='chart' data={volunteerData} height={300} width={500}/>
					</Col>
				</Row>

			</Container>
				
			</div>
		);
	}
}

export default UserContributions;

