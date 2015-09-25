'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Name Schema
 */
var NameSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Name name',
		trim: true
	},
	desc: {
		type: String,
		default : ''
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('sw-names', NameSchema);

var ContactSchema = new Schema({
	title : {
		type: String
	},
	name : {
		type : String
	},
	street : {
		type : String
	},
	place : {
		type: String
	},
	email : {
		type: String
	},
	phone : {
		type: String
	}
});

mongoose.model('sw-contacts', ContactSchema);

var PlaceSchema = new Schema({
	name : {
		type : String
	},
	movie : {
		type: String
	}
});

mongoose.model('sw-places', ContactSchema);