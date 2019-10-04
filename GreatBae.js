require('dotenv').config();
var mysql = require ('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,user: 'root',
    password: process.env.DB_PASSWORD,
    database:""
});

function run () {
    inquirer
}