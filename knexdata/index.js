import knex from 'knex';
import fs from 'fs';
import jsyaml from 'js-yaml';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const yaml = fs.readFileSync('./db.config.yaml', 'utf8');
const config = jsyaml.load(yaml);

const db = knex({
  client: 'mysql2',
  connection: config.db
});


// insert 新的数据
app.post('/create', async (req, res) => {
  const { name, email } = req.body;
  try {
    const [id] = await db('users').insert({ name, email });
    res.status(201).json({ id, name, email });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// get 所有的数据
app.get('/list', async (req, res) => {
  try {
    const users = await db('users').select('*').orderBy('id', 'desc');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
