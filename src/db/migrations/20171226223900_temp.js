exports.up = function(knex, Promise) {
	return knex.schema.createTable('temp', table => {
		table.increments('id').primary()
    table.string('temp')
    table.timestamp('created_at')
    table.timestamp('updated_at')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('temp')
};