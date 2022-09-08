const router = require('express').Router();

// --| Access it via http://localhost:3000/postcodeinfo/{POSTCODE}
router.get('/:postcode', async (req, res, next) => {
    const postCode = req.params.postcode;

    // --| Your code here
    return res.json({ message: `Requested postcode: ${postCode}` });
});

module.exports = router;
