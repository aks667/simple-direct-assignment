const path = require('path');

const db = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, './jobs.db')
	},
	useNullAsDefault: true
});

module.exports = db;
