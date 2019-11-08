exports.seed = function(knex) {
  return knex('tasks').insert([
      {description: 'Create README', notes: 'Document the project', completed: true, project_id: 1},
      {description: 'Install packages', notes: '', completed: false, project_id: 1},
      {description: 'Run server start', notes: 'Run the development server', completed: false, project_id: 1},
  ]);
};
