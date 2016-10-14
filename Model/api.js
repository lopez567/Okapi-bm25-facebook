var User = require('../db/User');
var Promise = require('bluebird');

module.exports = {
	get: () => {
		return new Promise( (resolve, reject) => {
			resolve('Hello World')
		});
	}
}