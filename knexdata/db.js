import knex from 'knex';
import fs from 'fs';
import jsyaml from 'js-yaml';

const yaml = fs.readFileSync('./db.config.yaml', 'utf8');
const config = jsyaml.load(yaml);

console.log('Database config loaded:', config.db);

const db = knex({
  client: 'mysql2',
  connection: config.db
});


db.schema.hasTable('users').then(exists => {
  if (!exists) {
    return db.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.timestamps(true, true);
    });
  }
});

