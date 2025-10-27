import express from 'express';
import User from './src/user.js'
import { loggerMiddleware } from './middleware/logger.js';

const app = express();

app.use(loggerMiddleware);
app.use(express.json());
app.use('/user', User)

// 中间件

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});