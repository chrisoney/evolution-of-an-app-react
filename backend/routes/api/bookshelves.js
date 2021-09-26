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

router.post('/', asyncHandler(async(req, res) => {
  const { userId, name } = req.body;
  const bookshelf = await Bookshelf.create({
    userId,
    name
  })
  const loadedBookshelf = await Bookshelf.findByPk(bookshelf.id, {
    include: [{
      model: User,
      attributes: ['id','username']
    }, {
      model: Story,
    }]
  })
  res.json({ bookshelf: loadedBookshelf })
}))

router.patch('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { name } = req.body
  const bookshelf = await Bookshelf.findByPk(req.params.id, {
    include: [{
      model: User,
      attributes: ['id','username']
    }, {
      model: Story,
    }]
  })
  if (bookshelf) bookshelf.name = name;
  await bookshelf.save()

  res.json({ bookshelf })
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const bookshelfId = parseInt(req.params.id)
  const bookshelf = await Bookshelf.findByPk(bookshelfId)
  if (bookshelf) await bookshelf.destroy();

  res.json({ bookshelfId })
}))

router.delete('/custom', asyncHandler(async (req, res) => {
  const { userId } = req.body
  const bookshelves = await Bookshelf.findAll({
    where: {
      userId,
      deleteAllowed: true
    }
  })
  const bookshelfIds = bookshelf.map(shelf => shelf.id);
  for (let i = 0; i < bookshelves.length; i++){
    await bookshelf.destroy()
  }
  res.json({ bookshelfIds })
}))

module.exports = router;