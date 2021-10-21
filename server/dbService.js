const mysql = require('mysql');
let instance = null;

const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'password',
	database: 'covidcase',
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('db ' + connection.state);
});

class DbService {
	static getDbServiceInstance() {
		return instance ? instance : new DbService();
	}

	async getconfirmed() {
		try {
			const response = await new Promise((resolve, reject) => {
				const query = 'SELECT * FROM coviddata_kerala;';

				connection.query(query, (err, results) => {
					if (err) reject(new Error(err.message));
					resolve(results);
				});
			});
			return response;
		} catch (error) {
			console.log('error in read', error);
		}
	}

	async getdate() {
		try {
			const response = await new Promise((resolve, reject) => {
				const query = 'SELECT Date FROM coviddata_kerala;';

				connection.query(query, (err, results) => {
					if (err) reject(new Error(err.message));
					resolve(results);
				});
			});
			return response;
		} catch (error) {
			console.log('error in read', error);
		}
	}
}

module.exports = DbService;
