const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Placement } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const placements = await Placement.findAll()
  res.json({ placements })
}))
module.exports = router;