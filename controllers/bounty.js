const router = require('express').Router()
const db = require('../models')

// GET /bounties -- index of bounties

// GET /bounties/:id -- details on one bounty
// POST /bounties -- create new bounty
router.post('/', async (req, res) => {
	try {
		// const bounty = new db.Bounty() this is fine
		const newBounty = await db.Bounty.create(req.body)
		res.status(201).json(newBounty)
	} catch (err) {
		console.log(err)
		res.status(500).json(err)
	}
})

// PUT /bounties/:id -- update a bounty
// DELETE /bounties/:id -- Destroy a bounty

module.exports = router