const express = require('express');

const router = express.Router();

const models = require('./projectModel');


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