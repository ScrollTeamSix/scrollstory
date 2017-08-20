
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('images', (table) => {
    table.increments('id').unsigned().primary();
    table.string('image_url');
    table.integer('position');
    table.integer('story_id').references('id').inTable('stories');
  }).then( () => {
    console.log('images table created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
