var mysql = require("mysql");
var Sequelize = require("sequelize");

//Database connection
const db = new Sequelize("BARgOmUHdR", "BARgOmUHdR", "Vtuj3U02FS", {
  host: "remotemysql.com",
  dialect: "mysql"
});

db.sync({ force: false, logging: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
