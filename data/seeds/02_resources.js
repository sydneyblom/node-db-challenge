
exports.seed = function(knex) {
  return knex('resources').insert([
  {name: 'Macbook Pro', description: 'A macbook pro suitable for programming'},
  {name: 'Desk', description: ''},
  {name: 'Monitor', description: ''}
]);
};