const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const client = new MongoClient(URI);

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getRMA', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('RMA').find().toArray();
    await con.close();
    const lastRma = data.reduce((max, obj) => {
      return obj.deviceInfo.repairNumber > max
        ? obj.deviceInfo.repairNumber
        : max;
    }, data[0].deviceInfo.repairNumber);
    res.send(lastRma.toString());
    console.log(con);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/register', async (req, res) => {
  try {
    const rma = req.body;
    const con = await client.connect();
    const data = await con.db(dbName).collection('RMA').insertOne(rma);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/rma/:repairNumber', async (req, res) => {
  try {
    const { repairNumber } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('RMA')
      .findOne({ 'deviceInfo.repairNumber': Number(repairNumber) });

    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Hello from port ${port}`);
});
