var dotenv = require('dotenv');
dotenv.config()
module.exports = {
    DBURL: process.env.DBURL,
    DBNAME: process.env.DBNAME,
    DBUSER: process.env.DBUSER,
    DBPASS: process.env.DBPASS
}