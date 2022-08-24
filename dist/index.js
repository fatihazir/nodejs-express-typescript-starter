"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
dotenv_1.default.config({ path: './config/config.env' });
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server is working. Congrats!');
});
const server = app.listen(port, () => {
    console.log(colors_1.default.bgGreen(`⚡️[server]: Server is running at https://localhost:${port} in ${process.env.NODE_ENV} mode`));
});
process.on('unhandledRejection', (err, promise) => {
    console.log(colors_1.default.bgRed(`Unhandled rejection ${err.message}`));
    server.close(() => { process.exit(1); });
});
