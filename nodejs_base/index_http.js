import http from 'http';
import url from 'url';

const PORT = 3000;
// query 接收get 的参数
// req.on('data' 接收post参数
http.createServer((req, res) => {
    const { pathname, query} = url.parse(req.url, true);
    if (req.method === 'GET') {
        if (pathname === '/greet') {
            console.log('Greet endpoint was called');
            console.log('Query parameters:', query);
            res.end('ok');
        }
    } else if (req.method === 'POST') {
        // Handle POST requests here
        if (pathname === '/post') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.setHeader('Content-Type', 'application/json'); // 设置响应头的 Content-Type 为 'application/json'
                res.statusCode = 200; // 设置响应状态码为 200
                res.end(body); // 将获取到的数据作为响应体返回
            });
        }
        
    }
}).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});