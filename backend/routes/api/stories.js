const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Story, Bookshelf, Tag, Review, Sequelize } = require('../../db/models');
const { Op } = Sequelize;

router.get('/', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    include: [Bookshelf, Review, Tag]
  })
  res.json({ stories })
}))

router.post('/search', asyncHandler(async (req, res) => {
  const { filter, term } = req.body;
  let stories;
  if (filter === 'all' || filter === undefined) {
    stories = await Story.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `%${term}%`
            }
          },
          {
            author: {
              [Op.iLike]: `%${term}%`
            }
          },
          {
            description: {
              [Op.iLike]: `%${term}%`
            }
          }
        ]
      },
      include: [
        Review,
        Bookshelf
      ]
    })
  } else {
    stories = await Story.findAll({
      where: {
        [filter]: {
          [Op.iLike]: `%${term}%`
        }
      },
      include: [
        Review,
        Bookshelf
      ]
    })
  }
  res.json({ stories })
}))

module.exports = router;