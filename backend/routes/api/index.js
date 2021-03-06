const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bookshelvesRouter = require('./bookshelves')
const storiesRouter = require('./stories')
const placementsRouter = require('./placements')
const reviewsRouter = require('./reviews')
const tagsRouter = require('./tags')
// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get(
  '/set-token-cookie',
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get('/restore-user', restoreUser, (req, res) => {
  // console.log(req.user.toJSON())
  return res.json(req.user);
});

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});
router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/bookshelves', bookshelvesRouter);
router.use('/stories', storiesRouter);
router.use('/placements', placementsRouter);
router.use('/reviews', reviewsRouter);
router.use('/tags', tagsRouter);

module.exports = router;
