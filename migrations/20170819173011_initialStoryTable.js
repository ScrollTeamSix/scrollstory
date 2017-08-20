
exports.up = function(knex, Promise) {
  	return knex.schema.createTableIfNotExists('stories', function(table) {
		table.increments('id').unsigned().primary();
		table.dateTime('createdAt').notNull();
    table.string('title').notNull();
    table.string('user').notNull();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories');
};