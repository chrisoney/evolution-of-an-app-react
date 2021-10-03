const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Placement, Bookshelf, Story } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const placements = await Placement.findAll()
  res.json({ placements })
}))

router.post('/', asyncHandler(async (req, res) => {
  const { bookshelfId, storyId, userId } = req.body

  const deletedIds = [];

  const bookshelf = await Bookshelf.findByPk(bookshelfId);
  if (!bookshelf.deleteAllowed) {
    const bookshelves = await Bookshelf.findAll({
      where: {
        userId,
        deleteAllowed: false
      },
      include: Story
    })
    console.log(bookshelves.map(shelf => shelf.name))
    for (let i = 0; i < bookshelves.length; i++) {
      const shelf = bookshelves[i];
      const storyIds = shelf.Stories.map(story => story.id);
      if (storyIds.includes((parseInt(storyId, 10)))) {
        const placement = await Placement.findOne({
          where: {
            bookshelfId: shelf.id,
            storyId
          }
        })
        deletedIds.push(placement.id);
        await placement.destroy()
      }
    }
  }
  let placement = await Placement.findOne({
    where: {
      bookshelfId,
      storyId
    }
  });
  if (placement) {
    await placement.destroy();
  }
  else {
    placement = await Placement.create({
      bookshelfId,
      storyId
    })
  }

  res.json( { placement, deletedIds })
}))

router.delete('/', asyncHandler(async (req, res) => {
  const { storyId, userId } = req.body;
  const bookshelves = await Bookshelf.findAll({
    where: { userId },
    include: {
      model: Story,
      where: { id: storyId }
    }
  })
  for (let i = 0; i < bookshelves.length; i++){
    const bookshelf = bookshelves[i];
    const placement = await Placement.findOne({
      where: {
        bookshelfId: bookshelf.id,
        storyId
      }
    })
    if (placement) await placement.destroy();
  }

  res.json({ success: 'success' })
}))

module.exports = router;