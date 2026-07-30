import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('hii hext here!');
});

export default app;