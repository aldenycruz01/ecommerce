import express from 'express';
import data from './data';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.list(port, () => {
  console.log(`server-rodando  http://localhost:${port}`);
});
