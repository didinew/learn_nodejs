import express from 'express';

const router = express.Router();

router.post('/logout', (req, res) => {
  res.json({
    received: req.body
  });
});

export default router;