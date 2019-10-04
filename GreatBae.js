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













