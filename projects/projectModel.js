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
    return db('tasks')
        .join('projects', 'projects.id', '=','tasks.project_id')
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as project_name', 'projects.description as project_descriptions').map(task => {
            task.completed = task.completed ? 'true' : 'false';
            return task;
        });
}

function addTasks(id, task){
    return db('tasks')        
    .insert(task, 'id')    
    .then( ([id]) => {
        return getTasksById(id);        
    })
}

function getResources(){
    console.log(db('resources'));
    return db('resources');
}




module.exports = {
    getProjects,//
    getProjectById,//
    addProjects,//
    addTasks, 
    getTasks, //
    getResources
}