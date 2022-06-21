import express from 'express';
import datab from './datab.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(datab);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server-rodando  http://localhost:${port}`);
});
