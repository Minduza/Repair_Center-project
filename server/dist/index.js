"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_2.default)());
app.get('/', (req, res) => {
    res.send('Hello grom express + ts!!aaa!');
});
app.listen(port, () => {
    console.log(`Hello from port ${port}`);
});
