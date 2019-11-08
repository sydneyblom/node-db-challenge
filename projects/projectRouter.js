const express = require('express');

const projectRouter = express.Router();

const projectDB = require('./projectModel');


projectRouter.get('/', (req, res) => {
    projectDB.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get Projects from DB' });
        });
});

projectRouter.get('/:id', (req, res) => {
    const {id} = req.params;
    projectDB.getProjectById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json({ error: 'Failed to get project from DB'})
    })   
})

projectRouter.post('/', (req, res) => {
    projectDB.addProjects(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json({ error: 'Error adding Project to DB'})
    })
})
//not workinng?
projectRouter.get('/:id/tasks', (req, res) => {
    const {id} = req.params;
    projectDB.getTasks(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(error => {
        console.log("task retrieval error", error);
        res.status(500).json({ error: 'There was an error retrieving the tasks for that project.'})
    })
})


projectRouter.post('/:id/tasks', (req, res) => {
    const {id} = req.params;
    const task = req.body;
    task.project_id = id;
    projectDB.addTasks(id, task)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error adding the task to the database.'})
    })
})


projectRouter.get('/:id/resources', (req, res) => {
    const {id} = req.params;
    projectDB.getResources(id)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was error getting resources'});
    })
})

projectRouter.post('/:id/resources', (req, res) => {
    const {id} = req.params;

    projectDB.addResources(id, req.body)
    .then(resource => {
        res.status(200).json(req.body);
    })
    .catch(error => {
        res.status(500).json({ error: 'Error adding resource for project'});
    })

})


module.exports = projectRouter;