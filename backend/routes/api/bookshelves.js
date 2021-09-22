const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Bookshelf } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  console.log('HERE WE GOT HERE WE GOT HERE')
  const bookshelves = await Bookshelf.findAll()
  res.json({ bookshelves })
}))
module.exports = router;