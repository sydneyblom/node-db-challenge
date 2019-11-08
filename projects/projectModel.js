const express = require('express');


const db = require('../data/db-config');

function getProjects(id) {
    return db('projects');
}

function getProjectById(id){
    return db('projects')
        .where({ id })
        .first();
}

function addProjects(project){
    return db('projects')
    .insert(project, 'id')
    .then(([id]) => {
       return getProjectById(id); 
    })
}

//


function getTasks() {
    let tasks = db('tasks')
        .join('projects', 'projects.id', '=','tasks.project_id')
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as project_name', 'projects.description as project_descriptions')
        .then(function(data) {
            return data.map(task => {
                task.completed = task.completed ? 'true' : 'false';
            })
        });
}

function addTasks(id, task){
    return db('tasks')        
    .insert(task, 'id')    
    .then( ([id]) => {
        return getTasksById(id);        
    })
}

function getResources() {
    return db('resources');
}

function addResource(resource) {
    return db('resource')
        .insert(resource)
}


module.exports = {
    getProjects,//
    getProjectById,//
    addProjects,//
    addTasks, 
    getTasks,
    getResources,
    addResource
}