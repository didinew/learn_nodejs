// 响应头
import express from 'express';
const app = express();

// 解析 JSON 请求体，不设置是接收不到数据的
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 允许所有域名访问
  res.header('Access-Control-Allow-Headers','Content-Type'); // 设置响应内容类型
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.post('/info', (req, res) => {
    console.log(req.body);
    res.send({
        message: '数据接收成功'
    }
    );
});


// SSE技术
// SSE 是一种在单个 HTTP 连接上进行服务器到客户端的单向实时通信的技术。它允许服务器主动向客户端推送数据，而无需客户端频繁轮询服务器，从而实现实时更新。
// websocket 属于全双工通信，sse 属于单向通信
// express增加该响应头 text/event-stream 就变成 sse event 事件名称data发送数据
app.use('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.status(200)
    setInterval(() => {
        const data = `data: 当前时间是 ${new Date().toLocaleTimeString()}\n\n`;
        res.write(data); // 发送数据到客户端
    }, 1000);

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});