import './DateFilter.css';

const FromFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
		// console.log(event.target.value);
	};

	// var month = [];
	// month = props.options.map((dData) => dData.Date);
	// console.log(month);
	return (
		<div className='date-filter'>
			<label>Filter by date</label>
			<select
				className='dropdown'
				value={props.selected}
				onChange={dropdownChangeHandler}
			>
				<option value='Select an option'>Select a date</option>
				<option value='Jan 2020'>Jan 2020</option>
				<option value='Feb 2020'>Feb 2020</option>
				<option value='Mar 2020'>Mar 2020</option>
				<option value='Apr 2020'>Apr 2020</option>
				<option value='May 2020'>May 2020</option>
				<option value='Jun 2020'>Jun 2020</option>
				<option value='Jul 2020'>Jul 2020</option>
				<option value='Aug 2020'>Aug 2020</option>
				<option value='Sep 2020'>Sep 2020</option>
				<option value='Oct 2020'>Oct 2020</option>
				<option value='Nov 2020'>Nov 2020</option>
				<option value='Dec 2020'>Dec 2020</option>
				<option value='Jan 2021'>Jan 2021</option>
				<option value='Feb 2021'>Feb 2021</option>
				<option value='Mar 2021'>Mar 2021</option>
				<option value='Apr 2021'>Apr 2021</option>
				<option value='May 2021'>May 2021</option>
				<option value='Jun 2021'>Jun 2021</option>
				<option value='Jul 2021'>Jul 2021</option>
				<option value='Aug 2021'>Aug 2021</option>
				<option value='Sep 2021'></option>
				<option value='Oct 2021'></option>
				{/* {props.options.map((opt) => (
					<option value={opt.Date}>13</option>
				))} */}
			</select>
		</div>
	);
};

export default FromFilter;
