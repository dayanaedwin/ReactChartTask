import { Line } from 'react-chartjs-2';

const AllLineChart = (props) => {
	var from = '';
	var to = '';
	var month = [];
	var confirmeddata = [];
	var recovereddata = [];

	if (props.filterFrom && props.filterTo) {
		props.coviddata.map((dDate, i) => {
			if (dDate.Date === props.filterFrom) {
				from = i;
			}
			if (dDate.Date === props.filterTo) {
				to = i;
			}
		});
		for (var j = from; j <= to; j++) {
			month = [...month, props.coviddata[j].Date];
			confirmeddata = [...confirmeddata, props.coviddata[j].Confirmed];
			recovereddata = [...recovereddata, props.coviddata[j].Recovered];
		}
	} else {
		confirmeddata = props.coviddata.map((dData) => dData.Confirmed);
		recovereddata = props.coviddata.map((dData) => dData.Recovered);
		month = props.coviddata.map((dData) => dData.Date);
	}

	const data = {
		labels: [...month],
		datasets: [
			{
				label: 'Kerala Covid Cases - Confirmed',
				data: [...confirmeddata],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1,
				fill: true,
				tension: 0.5,
			},
			{
				label: 'Kerala Covid Cases - Recovered',
				data: [...recovereddata],
				backgroundColor: ['rgba(54, 162, 235, 0.2)'],
				borderColor: ['rgba(54, 162, 235, 1)'],
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

export default AllLineChart;
