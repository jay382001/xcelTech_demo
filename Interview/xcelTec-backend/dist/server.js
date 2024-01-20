"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./connection");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const route_1 = require("./route");
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use("/uploads", express_1.default.static(path_1.default.join("./uploads")));
        const port = process.env.PORT;
        this.app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        const connect = new connection_1.Connect();
        connect.connectdb();
        const routes = new route_1.Routes();
        this.app.use('/v1', routes.path());
        this.app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        });
    }
}
exports.App = App;
