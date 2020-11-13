const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WargaSchema = new Schema({
	nama:{
		type: String
	},
	agama:{
		type: String
	},
	warganegara:{
		type: String
	},
	status:{
		type: String
	},
	ekonomi:{
		type: String
	},
	gol:{
		type: String
	},
	alamat: {
		type: String
	},
	job:{
		type: String
	}

})

module.exports = Project = mongoose.model('warga', WargaSchema)