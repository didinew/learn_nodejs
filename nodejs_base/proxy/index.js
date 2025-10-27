import http from 'http';
import url from 'url';
import fs from 'fs';
import { createProxyMiddleware } from 'http-proxy-middleware';
import config from './config.js';
// 反向代理服务器
const PORT = 80;


// 给html 起服务
const html = fs.readFileSync('./index.html', 'utf-8');
console.log('HTML content loaded', html);
let nodeServer = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    // 根据config 文件 读取设置的代理配置
    const proxyList = Object.keys(config.server.proxy);
    
    // 如果pathname 在 proxyList 里面 则走代理
    if (proxyList.includes(pathname)) {
        const proxy = createProxyMiddleware(config.server.proxy[pathname]);
        proxy(req, res);
        return;
    }

    console.log('Serving HTML content', proxyList);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html); // 返回html 内容
})

nodeServer.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});