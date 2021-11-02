const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler');
const { Review, User, Story } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll()
  res.json({ reviews })
}))

router.post('/', asyncHandler(async (req, res) => {
  const { content, rating, userId, storyId } = req.body;
  const [review, _created] = await Review.findOrCreate({
    where: {
      userId,
      storyId
    }
  })

  if (content) review.content = content;
  if (rating) review.rating = rating;

  await review.save()

  res.json({ review })
}))

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByPk(id);
  if (review) {
    await review.destroy()
  } else {
    res.status(404).json({ error: 'Review could not be found'})
  }
  res.json({ reviewId: id  })
}))

module.exports = router;