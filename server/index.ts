import express from 'express';
import cors from 'express';

const port = 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello grom express + ts!!aaa!');
});

app.listen(port, () => {
  console.log(`Hello from port ${port}`);
});
