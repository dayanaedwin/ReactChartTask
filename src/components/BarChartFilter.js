import './BarChartFilter.css';

const BarChartFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className='chart-filter'>
			<label>Filter by data</label>
			<select
				className='dropdown'
				value={props.selected}
				onChange={dropdownChangeHandler}
			>
				<option value='Select an option'>Show bar chart of</option>
				<option value='Confirmed'>Confirmed</option>
				<option value='Recovered'>Recovered</option>
				<option value='Death'>Death</option>
				<option value='Confirmed vs Recovered'>
					Confirmed vs Recovered
				</option>
			</select>
		</div>
	);
};

export default BarChartFilter;
