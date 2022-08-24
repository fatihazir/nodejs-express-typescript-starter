import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config({ path: './config/config.env' })

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is working. Congrats!');
});

const server = app.listen(port, () => {
    console.log(colors.bgGreen(`⚡️[server]: Server is running at https://localhost:${port} in ${process.env.NODE_ENV} mode`));
});

process.on('unhandledRejection', (err: Error, promise) => {
    console.log(colors.bgRed(`Unhandled rejection ${err.message}`))
    server.close(() => { process.exit(1) })
})