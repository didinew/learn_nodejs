import express from 'express';

// 制作防盗链
const app = express();

const whiteList = ['localhost']

// 防盗链中间件
const preventHotLinking = (req, res, next) => {
    // 获取请求头
    console.log('Headers:', req.headers);
    const referer = req.get('referer'); // 获取请求头部的 referer 字短
    console.log('Referer:', referer);
    if (referer) {
        const { hostname } = new URL(referer);
        if (!whiteList.includes(hostname)) {
            res.status(403).send('Forbidden');
            return
        }
    }
    next()
}

app.use(preventHotLinking);

app.use('/assets', express.static('assets'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
