const express = require('express');
const router = express.Router();
const { registerUser, loginUser, addToWatchlist, addToWatchedlist, getUserLists } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/watchlist', auth, addToWatchlist);
router.post('/watchedlist', auth, addToWatchedlist);
router.get('/userlists', auth, getUserLists);

module.exports = router;
