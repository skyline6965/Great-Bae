require("dotenv").config();
var inquirer = require("inquirer");
var mysql = require("mysql");

function run() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Post or Bid?",
                name: "userDefiner"
            }
        ]).then(answer => {
            function switchIt() {
                switch (answer.userDefiner) {
                    case "post":
                        postItem();
                        break;
                    case "bid":
                        bid();
                        break;
                    default: console.log("Please choose a valid command");
                        run();
                }
            };
        })
}












require('dotenv').config();
var mysql = require ('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,user: 'root',
    password: process.env.DB_PASSWORD,
    database:"greatbay_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

