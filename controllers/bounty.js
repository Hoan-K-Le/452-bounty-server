const router = require('express').Router()
const db = require('../models')

// GET /bounties -- index of bounties
router.get('/', async (req, res) => {
	try {
		// find all bounties
		const bounties = await db.Bounty.find({})
		// send them to the client
		res.json(bounties)
	} catch (err) {
		console.log(err)
		res.status(500).json({ msg: 'server error' })
	}
})

// GET /bounties/:id -- details on one bounty
router.get('/:id', async (req, res) => {
	try {
		// get the id of a specific bounty from the url params
		console.log(req.params.id)
		const bounty = await db.Bounty.findById(req.params.id)
		// send bounty back to the client
		res.json(bounty)
	} catch (err) {
		console.log(err)
		res.status(500).json({ msg: 'server error' })
	}
})

// POST /bounties -- create new bounty
router.post('/', async (req, res) => {
	try {
		// const bounty = new db.Bounty() this is fine
		const newBounty = await db.Bounty.create(req.body)
		res.status(201).json(newBounty)
	} catch (err) {
		console.log(err)
		if (err.name ===  "ValidationError") {
			res.status(400).json({ msg: err.message })
		} else {
			res.status(500).json({ msg: 'server error' })
		}
	}
})

// PUT /bounties/:id -- update a bounty
router.put('/:id', async (req, res) => {
	try {
		// get id from the url params
		const id = req.params.id
		// search for the id in the db, and update using the req.body
		const options = { new: true } // return the updated bounty to us
		const updatedBounty = await db.Bounty.findByIdAndUpdate(id, req.body, options)
		// send the updated bounty back to client
		res.json(updatedBounty)
	} catch (err) {
		console.log(err)
		res.status(500).json({ msg: 'server error' })
	}
})

// DELETE /bounties/:id -- Destroy a bounty
router.delete('/:id', async (req, res) => {
	try {
		// get the id from the req.params 
		const id = req.params.id
		// delete that bounty in the db
		await db.Bounty.findByIdAndDelete(id)
		// send 'no content' status
		res.sendStatus(204) // was successful -- nothing exists
	} catch (err) {
		console.log(err)
		res.status(500).json({ msg: 'server error' })
	}
})

module.exports = router