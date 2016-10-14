var models = require('../Model/api')

module.exports = {
	api: function(req, res) {
		models.get()
		.then( data => {
			res.status(200).send(data);
		})
	}
}