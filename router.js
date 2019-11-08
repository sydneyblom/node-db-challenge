const express = require('express');

const Models = require('./models.js');


const router = express.Router();

router.get('/', (req, res) => {
    Models.findTasks()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get schemes' });
        });
});

module.exports = router;