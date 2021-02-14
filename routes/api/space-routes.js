const express = require('express');
const router = express.Router();
const cors = require('cors');

const validateSpaceInput = require('../../validation/space');

const Space = require('../../models/Space');
router.use(cors());

//methods for Spaces
router.post('/api/post-space', (req, res) => {
    const { errors, isValid } = validateSpaceInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Space.findOne({
        address: req.body.address,
    }).then((response) => {
        if (response) {
            res.status(400).json({ address: 'address already exists' });
            return res.send('address already exists');
        }
    });
});

module.exports = router;
