import http from 'http';
import url from 'url';

const PORT = 3000;

http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);
    if (pathname === '/api') {
        console.log('API endpoint was called');
        res.end('ok');
    }

}).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});