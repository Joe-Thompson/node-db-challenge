exports.up = async function(knex) {
  await knex.schema.createTable('project', (table) => {
      table.increments('id');
      table.text('name').notNullable().unique();
      table.text('description');
      table.boolean('completed').notNullable().defaultTo(false);
  });
  await knex.schema.createTable('resource', (table) => {
     table.increments('id');
     table.text('name').notNullable().unique();
     table.text('description');
  });
  await knex.schema.createTable('task', (table) => {
     table.increments('id');
     table.text('description').notNullable();
     table.text('note');
     table.boolean('completed').notNullable().defaultTo(false);
     table.integer('project_id')
         .references('id')
         .inTable('project')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
  });
  await knex.schema.createTable('project_resource', (table) => {
      table.integer('project_id')
          .references('id')
          .inTable('project')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      table.integer('resource_id')
          .references('id')
          .inTable('resource')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      table.primary(['project_id', 'resource_id']);
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resource');
    await knex.schema.dropTableIfExists('task');
    await knex.schema.dropTableIfExists('resource');
    await knex.schema.dropTableIfExists('project');
};
