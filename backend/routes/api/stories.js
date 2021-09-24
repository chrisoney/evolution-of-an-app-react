const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Story, Bookshelf, Placement, Review } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    include: [Bookshelf, Review, Placement]
  })
  res.json({ stories })
}))
module.exports = router;