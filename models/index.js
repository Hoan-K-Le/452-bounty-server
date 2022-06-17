// connect to the mongodb
const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/bountyApi'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`connected to mongoDB on ${db.host}:${db.port}`)) 
db.on('error', err => console.log(`ut oh, sphaghetti - OP`, err))

// export models
module.exports = {
	Bounty: require('./bounty')
}