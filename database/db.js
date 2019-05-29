var mysql = require('mysql');
var Sequelize = require('sequelize');

//Database connection
const db = new Sequelize('sql2293815', 'sql2293815', 'tL4!hH5!', {
	host: 'sql2.freesqldatabase.com',
	dialect: 'mysql'
});

db.sync({ force: false, logging: false }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
