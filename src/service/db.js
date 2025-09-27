// Import the module mysql2 for MySQL commands in nodejs
const mysql = require('mysql2');

require('dotenv').config();

// Settings to connect to database
const setting = {
    host     :  process.env.DB_HOST,
    port     :  process.env.DB_PORT,
    user     :  process.env.DB_USER,
    password :  process.env.DB_PASSWORD,
    database :  process.env.DB_NAME,
    multipleStatements: true, //allow multiple sql statements
    dateStrings: true, //return date as string instead of Date object
    ssl: {
        rejectUnauthorized: true, // enforce SSL
        ca: process.env.MYSQL_CA_PEM
    }
}

const pool = mysql.createPool(setting);

module.exports = pool;