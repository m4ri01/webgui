const Sequelize = require("sequelize");
const {DBURL,DBNAME,DBUSER,DBPASS} = require("../config/index")

var db = new Sequelize(DBNAME,DBUSER,DBPASS,{
    host:DBURL,
    dialect: 'mssql',
    pool:{
        max:5,
        min:0,
        idle:10000
    },
    dialectOptions: {
        encrypt: true
    }
});

module.exports = db;