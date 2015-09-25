var chalk = require('chalk');
var mongoose = require("mongoose");

var Name = mongoose.model('sw-names');
var Place = mongoose.model('sw-places');
var Contact = mongoose.model('sw-contacts');

var controller = {}

console.log("Setting Star Wars Controller");

controller.names = {};
controller.names.getRandom = function(req, res){
	console.log(chalk.green('[GET] '), chalk.blue(req.path));
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	Name.findOne().select({name:1, desc:1}).skip(Math.random()*500).exec(function(err, names) {
			if (err) {
				console.log(chalk.red('400 - Error:'));
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				console.log(chalk.green('200 - DS: '), chalk.blue(names.name));
				res.jsonp(names);
			}
	});
};

controller.names.getAll = function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
   	var filterq = (req.query.filter) ? JSON.parse(req.query.filter) : {};
	Name.find(filterq).select({name:1, desc:1}).exec(function(err, names) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(names);
			}
	});
};

controller.names.getOne = function(req,res,next){
	console.log("NameID:", req.params.id);
	Name.findOne({"_id" : req.params.id }).select({name:1, desc:1}).exec(function(err, names) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(names);
			}
	});
};

controller.places = {};
controller.places.getRandom = function(req, res){
	console.log(chalk.green('[GET] '), chalk.blue(req.path));
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	Place.findOne().select({name:1, movie:1}).skip(Math.random()*500).exec(function(err, places) {
			if (err) {
				console.log(chalk.red('400 - Error:'));
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				console.log(chalk.green('200 - DS: '), chalk.blue(places));
				res.jsonp(places);
			}
	});
};

controller.places.getAll = function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var filterq = (req.query.filter) ? JSON.parse(req.query.filter) : {};
	Place.find(filterq).exec(function(err, places) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(places);
			}
	});
};

controller.places.getOne = function(req,res,next){
	console.log("PlaceID:", req.params.id);
	Place.findOne({"_id" : req.params.id }).exec(function(err, places) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(places);
			}
	});
};

controller.contacts = {};
controller.contacts.getRandom = function(req, res){
	console.log(chalk.green('[GET] '), chalk.blue(req.path));
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	Contact.findOne().skip(Math.random()*500).exec(function(err, contacts) {
			if (err) {
				console.log(chalk.red('400 - Error:'));
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				console.log(chalk.green('200 - DS: '), chalk.blue(contacts));
				res.jsonp(contacts);
			}
	});
};

controller.contacts.getAll = function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var filterq = (req.query.filter) ? JSON.parse(req.query.filter) : {};
	Contact.find(filterq).exec(function(err, contacts) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(contacts);
			}
	});
};

controller.contacts.getOne = function(req,res,next){
	console.log("PlaceID:", req.params.id);
	Contact.findOne({"_id" : req.params.id }).exec(function(err, contacts) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(contacts);
			}
	});
};

module.exports = controller;
