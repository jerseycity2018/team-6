import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

var DonutChart = require("react-chartjs").Doughnut;
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
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
				<DonutChart ref='chart' data={data} />
			</div>
		);
	}
}

export default UserContributions;

