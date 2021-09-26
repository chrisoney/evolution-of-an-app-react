const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Tag, Story } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const tags = await Tag.findAll({
    include: Story
  })
  res.json({ tags })
}))
module.exports = router;