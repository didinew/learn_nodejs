import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// 创建用户和帖子，并设置关系
app.post('/createUserWithPosts', async (req, res) => {
  const { name, email, posts } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: {
            title: posts.title,
            content: posts.content,
          },
        },
      },
      include: {
        posts: true,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user with posts' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});