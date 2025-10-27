import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/post', (req, res) => {
    // post 请求体解析 req.body
    const data = req.body;
    console.log(data);
    res.send('Data received');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});