import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { Connect } from './connection';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { Routes } from './route';

dotenv.config();

export class App {
    protected app: express.Application;

    constructor() {
        this.app = express();
        this.app.use("/uploads", express.static(path.join("./uploads")));
        
        const port = process.env.PORT;
        this.app.use(cors({ origin: 'http://localhost:4200' }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        const connect: Connect = new Connect();
        connect.connectdb();

        const routes = new Routes();
        this.app.use('/v1', routes.path());

        this.app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        })
    }
}
