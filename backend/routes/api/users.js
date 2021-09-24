const express = require('express');
const faker = require('faker')
const bcrypt = require('bcryptjs')

const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { addStories, alterFeed } = require('../../utils/demo');
const { User, Bookshelf, Story } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });
    const choices = ['Read', 'Currently Reading', 'Want To Read']

    for (let i = 0; i < choices.length; i++){
      const name = choices[i];
      await Bookshelf.create({ name, userId: user.id, deleteAllowed: false })
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

router.post(
  '/demo',
  asyncHandler(async (req, res) => {
    let user = await User.create({
      username: faker.name.findName(),
      email: faker.internet.email(),
      hashedPassword: bcrypt.hashSync('hunter12', 10)
    });
    const choices = ['Read', 'Currently Reading', 'Want To Read']
    const bookshelves = [];
    for (let i = 0; i < choices.length; i++){
      const name = choices[i];
      const newShelf = await Bookshelf.create({ name, userId: user.id, deleteAllowed: false })
      bookshelves.push(newShelf)
    }
    const newEditShelf = await Bookshelf.create({ name: 'Favorites', userId: user.id, deleteAllowed: true })
    bookshelves.push(newEditShelf);
    
    
    await addStories(bookshelves)
    await alterFeed()
    user = await User.scope('currentUser').findByPk(user.id, {
      include: {
        model: Bookshelf,
        include: Story
      }
    });
    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

module.exports = router;
