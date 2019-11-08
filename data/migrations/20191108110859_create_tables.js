exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('description').nullable().defaultTo(null);
            table.boolean('completed').defaultTo(false);

        })
        .createTable('resources', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('description');
        })
        .createTable('tasks', table => {
            table.increments('id').primary();
            table.string('description').notNullable();
            table.string('notes');
            table.boolean('completed').defaultTo(false);
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects').onDelete('cascade')
        })
        .createTable('projects_resources', table => {
            table.increments('id').primary();
            table.integer('project_id').references('id').inTable('projects').onDelete('cascade').onUpdate('CASCADE')
            ;
            table.integer('resource_id').references('id').inTable('resources').onDelete('cascade').onUpdate('CASCADE')
            ;
        });
};


exports.down = function (knex) {
return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
};