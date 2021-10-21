// Core Imports
const express = require('express');
const cors = require('cors');

const app = express();

const dbService = require('./dbService');

app.use(express.json());
app.use(cors());

app.get('/confirmed', async (req, res) => {
	const db = dbService.getDbServiceInstance();

	let cases = [];
	try {
		cases = await db.getconfirmed();
		console.log(cases);
		if (cases !== undefined) {
			res.status(200).json({
				cases: cases,
				status: 'SUCCESS',
			});
		} else {
			res.status(200).json({
				status: 'FAILURE',
			});
		}
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

app.get('/date', async (req, res) => {
	const db = dbService.getDbServiceInstance();

	let cases = [];
	try {
		cases = await db.getdate();
		console.log(cases);
		if (cases !== undefined) {
			res.status(200).json({
				cases: cases,
				status: 'SUCCESS',
			});
		} else {
			res.status(200).json({
				status: 'FAILURE',
			});
		}
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

app.listen(5000, () => {
	console.log('Running on port 5000');
});
