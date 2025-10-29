// 响应头
import express from 'express';
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 允许所有域名访问
  res.header('Content-Type', 'application/json;charset=utf-8'); // 设置响应内容类型
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});