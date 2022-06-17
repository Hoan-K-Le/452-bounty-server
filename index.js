// required packages
const express = require('express')
const cors = require('cors')
// connect to mongo
require('./models')

// app config/middlewares
const app = express()
const PORT = 8000
// parsing html form request bodies
// app.use(express.urlencoded({ extended: false }))
// parse json request bodies
app.use(express.json())
app.use(cors())


// routes/controllers
app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to the bounty API' })
})

app.use('/bounties', require('./controllers/bounty'))

// listening on a port
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👂`))