var chalk = require('chalk');
console.log(chalk.yellow('Setting up GeekAPI at: localhost' ));

var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/ranName');

var mods = require('./modules/modules.js')(app);


console.log("Listen on ", 3000);
app.listen(3000);
