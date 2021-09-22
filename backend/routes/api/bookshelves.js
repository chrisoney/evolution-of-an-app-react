const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Bookshelf, User, Story } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const bookshelves = await Bookshelf.findAll({
    include: [{
      model: User,
      attributes: ['id','username']
    }, {
      model: Story,
    }]
  })
  res.json({ bookshelves })
}))
module.exports = router;