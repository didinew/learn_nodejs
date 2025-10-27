import express from 'express';
import User from './src/user.js'

const app = express();


app.use(express.json());
app.use('/user', User)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});