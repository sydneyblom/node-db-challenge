exports.seed = function(knex) {
  return knex('projects').insert([
     {name: 'Node-Db1-challenge', description: 'The first DB challenge', completed: true},
     {name: 'Node-Db2-challenge', description: '', completed: true},
     {name: 'Node-Db3-challenge', description: '', completed: false},
 ]);
};