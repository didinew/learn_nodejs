import mysql2 from 'mysql2/promise';
import fs from 'fs';
import jsyaml from 'js-yaml';
import express from 'express';


const app = express();
const port = 3000;

app.use(express.json());

// 读取数据库配置文件
const yaml = fs.readFileSync('./db.config.yaml', 'utf8');
const config = jsyaml.load(yaml);


// 创建数据库连接池
const sql = await mysql2.createConnection({
    ...config.db
})

// 获取用户列表
app.get('/', async (req, res) => {
    const [rows] = await sql.execute('SELECT * FROM user');
    res.json(rows);
});

// 获取某个用户
app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    const [rows] = await sql.execute('SELECT * FROM user WHERE id = ?', [userId]);
    res.json(rows[0]);
});

// 提交数据到数据库
app.post('/user', express.json(), async (req, res) => {
    const { name } = req.body;
    const [result] = await sql.execute('INSERT INTO user (name) VALUES (?)', [name]);
    res.json({ id: result.insertId, name });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});