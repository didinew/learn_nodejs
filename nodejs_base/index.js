// 动静分离
import fs from 'fs';
import http from 'http';
import url from 'url';
import path from 'path';
import mime from 'mime';

const PORT = 80;

const server = http.createServer((req,res) => {
    const { url, method } = req;
    if (method === 'GET' && url.startsWith('/static')) {
       const filePath = path.join(process.cwd(), url);
       const mineType = mime.getType(filePath);
       console.log('我走静态资源了', mineType);
       fs.readFile(filePath, (err, data) => {
           if (err) {
               res.writeHead(404, {'Content-Type': 'text/plain'});
               res.end('404 Not Found');
               return;
           }
           console.log('我再走缓存')
           res.writeHead(200,
                {
                    'Content-Type': mineType,
                    'Cache-Control': 'public, max-age=86400'  // 缓存一天
            });
           res.end(data);
       });
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});