import { APIService } from './api.service';
import { useState } from 'react';

import BarChartFilter from './components/BarChartFilter';
import LineChartFilter from './components/LineChartFilter';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import AllBarChart from './components/AllBarChart';
import AllLineChart from './components/AllLineChart';
import FromFilter from './components/FromFilter';
import ToFilter from './components/ToFilter';
import covidvaccine from './covidvaccine.jpg';
import './App.css';

const App = (props) => {
	const [filteredBarData, setFilteredBarData] = useState('Select an option');
	const [filteredLineData, setFilteredLineData] =
		useState('Select an option');

	const [fromData, setFromData] = useState('');
	const [toData, setToData] = useState('');
	const [data, setData] = useState();
	const [date, setDate] = useState();

	const [barFlag, setBarFlag] = useState('false');
	const [lineFlag, setLineFlag] = useState('false');

	const filterBarChangeHandler = (selectedBarData) => {
		setFilteredBarData(selectedBarData);
		setFilteredLineData('Select an option');
		setBarFlag('true');
		setLineFlag('false');
		cases();
	};

	const filterLineChangeHandler = (selectedLineData) => {
		setFilteredLineData(selectedLineData);
		setFilteredBarData('Select an option');
		setLineFlag('true');
		setBarFlag('false');
		cases();
	};

	const filterFromChangeHandler = (selectedFromData) => {
		setFromData(selectedFromData);
		// console.log(selectedFromData);
		getdate();
	};

	const filterToChangeHandler = (selectedToData) => {
		setToData(selectedToData);
		getdate();
	};

	const cases = () => {
		APIService.covidcases().then((response) => {
			if (response.status === 'SUCCESS') {
				setData(response.cases);
			}
		});
	};

	const getdate = () => {
		APIService.getdate().then((response) => {
			if (response.status === 'SUCCESS') {
				setDate(response.cases);
			}
		});
	};
	// console.log(fromData);
	return (
		<div className='App'>
			<div className='heading'>Covid Case Statistics in Kerala</div>
			<div className='filter'>
				<BarChartFilter
					className='barchart-filter'
					selected={filteredBarData}
					onChangeFilter={filterBarChangeHandler}
				/>
				<LineChartFilter
					className='linechart-filter'
					selected={filteredLineData}
					onChangeFilter={filterLineChangeHandler}
				/>
				<FromFilter
					className='from-filter'
					selected={fromData}
					options={date}
					onChangeFilter={filterFromChangeHandler}
				/>
				<ToFilter
					className='to-filter'
					selected={toData}
					options={date}
					onChangeFilter={filterToChangeHandler}
				/>
			</div>

			<div className='barchart'>
				{filteredBarData === 'Select an option' &&
					barFlag === 'false' &&
					lineFlag === 'false' && (
						<div className='image'>
							<img src={covidvaccine} alt='Vaccination' />
						</div>
					)}
				{data &&
					filteredBarData !== 'Confirmed vs Recovered' &&
					filteredBarData !== 'Select an option' &&
					barFlag === 'true' &&
					lineFlag === 'false' && (
						<BarChart
							filter={filteredBarData}
							filterFrom={fromData}
							filterTo={toData}
							coviddata={data}
						/>
					)}
				{data &&
					filteredBarData === 'Confirmed vs Recovered' &&
					barFlag === 'true' &&
					lineFlag === 'false' && (
						<AllBarChart
							filter={filteredBarData}
							filterFrom={fromData}
							filterTo={toData}
							coviddata={data}
						/>
					)}
			</div>

			<div className='linechart'>
				{data &&
					filteredLineData !== 'Confirmed vs Recovered' &&
					barFlag === 'false' &&
					lineFlag === 'true' &&
					filteredLineData !== 'Select an option' && (
						<LineChart
							filter={filteredLineData}
							filterFrom={fromData}
							filterTo={toData}
							coviddata={data}
						/>
					)}
				{data &&
					filteredLineData === 'Confirmed vs Recovered' &&
					barFlag === 'false' &&
					lineFlag === 'true' && (
						<AllLineChart
							filter={filteredLineData}
							filterFrom={fromData}
							filterTo={toData}
							coviddata={data}
						/>
					)}
			</div>
		</div>
	);
};

export default App;
