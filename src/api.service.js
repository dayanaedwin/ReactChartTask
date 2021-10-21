export const APIService = {
	covidcases,
	getdate,
};

function covidcases() {
	const requestOptions = {
		method: 'GET',
	};
	return fetch('http://localhost:5000/confirmed', requestOptions).then(
		handleResponse
	);
}

function getdate() {
	const requestOptions = {
		method: 'GET',
	};
	return fetch('http://localhost:5000/date', requestOptions).then(
		handleResponse
	);
}

function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		return data;
	});
}
