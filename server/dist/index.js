"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/getRMA', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const con = yield client.connect();
        const data = yield con.db(dbName).collection('RMA').find().toArray();
        yield con.close();
        const lastRma = data.reduce((max, obj) => {
            return obj.deviceInfo.repairNumber > max
                ? obj.deviceInfo.repairNumber
                : max;
        }, data[0].deviceInfo.repairNumber);
        res.send(lastRma.toString());
        console.log(con);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rma = req.body;
        const con = yield client.connect();
        const data = yield con.db(dbName).collection('RMA').insertOne(rma);
        yield con.close();
        res.send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.get('/rma/:repairNumber', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { repairNumber } = req.params;
        const con = yield client.connect();
        const data = yield con
            .db(dbName)
            .collection('RMA')
            .findOne({ 'deviceInfo.repairNumber': Number(repairNumber) });
        yield con.close();
        res.send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.listen(port, () => {
    console.log(`Hello from port ${port}`);
});
