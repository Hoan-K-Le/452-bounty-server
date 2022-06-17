const mongoose = require('mongoose')

// create a bounty schema

/*
Bounty Schema
name: string
wantedFor: String
client: String
ship: String
reward: Number
captured: Bool
lastSeen: String
timestamps
*/

const BountySchema = new mongoose.Schema({
	name: {
		type: String,
		// mongoose will throw an err if field not present
		required: true,
		minlength: 4,
		maxlength: 300
	},
	wantedFor: {
		type: String,
		required: true
	},
	client: {
		type: String,
		required: true
	},
	// no options -- just say the type
	ship: String,
	reward: {
		type: Number,
		default: 100000
	}, 
	captured: {
		type: Boolean,
		default: false
	},
	lastSeen: String
}, {
	timestamps: true
})

// export a bounty model

module.exports = mongoose.model('Bounty', BountySchema)
