
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('StoryContent', (table) => {
    table.increments('id').unsigned().primary();
    table.string('body').notNull();
    table.integer('position').notNull();
    table.integer('story_id').references('id').inTable('stories');
  }).then(() => {
    console.log('StoryContent table created');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('videos');
};

