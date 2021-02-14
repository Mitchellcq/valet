const express = require('express');
const router = express.Router();
const cors = require('cors');

const validateSpaceInput = require('../../validation/space');

const Space = require('../../models/Space');
router.use(cors());

//methods for Spaces
router.post('/api/postSpace', (req, res) => {
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
        } else {
            const today = new Date();
            const spaceData = {
                userID: req.body.userID,
                address: req.body.address,
                cost: req.body.cost,
                image: req.body.image,
                created: today,
            };
            Space.create(spaceData)
                .then((space) => {
                    res.json(space);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
});

module.exports = router;
