var chalk = require('chalk');
var models = require('./starwars.models.js');
var controller = require('./starwars.controller.js');

console.log(chalk.yellow('Setting up Routes for Star Wars Module'));

module.exports = function(app){
	console.log(chalk.yellow('Register Routes for Names'));
	app.get('/name/sw' , controller.names.getRandom);
	app.get('/names/sw', controller.names.getAll);
	app.get('/names/sw/:id', controller.names.getOne);

	console.log(chalk.yellow('Register Routes for Places'));
	app.get('/place/sw' , controller.places.getRandom);
	app.get('/places/sw', controller.places.getAll);
	app.get('/places/sw/:id', controller.places.getOne);

	console.log(chalk.yellow('Register Routes for Contacts'));
	app.get('/contact/sw' , controller.contacts.getRandom);
	app.get('/contacts/sw', controller.contacts.getAll);
	app.get('/contacts/sw/:id', controller.contacts.getOne);

}
