import { Line } from 'react-chartjs-2';
import './BarChart.css';

const LineChart = (props) => {
	var from = '';
	var to = '';
	var month = [];
	var confirmeddata = [];

	// console.log(`barchart ${props.filterFrom}`);
	// console.log(`barchart ${props.filterTo}`);

	if (props.filterFrom && props.filterTo) {
		props.coviddata.map((dDate, i) => {
			// console.log(d);
			if (dDate.Date === props.filterFrom) {
				from = i;
			}
			if (dDate.Date === props.filterTo) {
				to = i;
			}
		});
		// var filtermonth = [];
		for (var j = from; j <= to; j++) {
			month = [...month, props.coviddata[j].Date];
			if (props.filter === 'Confirmed') {
				confirmeddata = [
					...confirmeddata,
					props.coviddata[j].Confirmed,
				];
			} else if (props.filter === 'Recovered') {
				confirmeddata = [
					...confirmeddata,
					props.coviddata[j].Recovered,
				];
			} else if (props.filter === 'Death') {
				confirmeddata = [...confirmeddata, props.coviddata[j].Deceased];
			}
		}
	} else {
		if (props.filter === 'Confirmed') {
			confirmeddata = props.coviddata.map((dData) => dData.Confirmed);
			month = props.coviddata.map((dData) => dData.Date);
		} else if (props.filter === 'Recovered') {
			confirmeddata = props.coviddata.map((dData) => dData.Recovered);
			month = props.coviddata.map((dData) => dData.Date);
		} else if (props.filter === 'Death') {
			confirmeddata = props.coviddata.map((dData) => dData.Deceased);
			month = props.coviddata.map((dData) => dData.Date);
		}
	}

	const data = {
		labels: [...month],
		datasets: [
			{
				label: `Kerala Covid Cases - ${props.filter}`,
				data: [...confirmeddata],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1,
				fill: true,
				tension: 0.5,
			},
		],
	};

	return (
		<div className='barChartContainer'>
			<Line data={data} />
		</div>
	);
};

export default LineChart;
