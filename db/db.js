const mysql = require('mysql');

const connect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'surveymon'
    }
);

module.exports = connect;
