const router = require('express').Router();

// --| Access it via http://localhost:3000
router.get('/', (req, res, next) => res.status(200).json({
    status: 200,
    message: 'Hello there!'
}));

module.exports = router;
