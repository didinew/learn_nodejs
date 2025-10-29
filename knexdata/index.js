import knex from 'knex';
import fs from 'fs';


const config = fs.readFileSync('./db.config.yaml', 'utf8');
console.log('Database config loaded:', config.db);

const db = knex({
  client: 'mysql2',
  connection: config.db
});

