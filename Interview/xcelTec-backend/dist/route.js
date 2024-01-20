"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const registerRoute_1 = require("./v1/auth/register/registerRoute");
const loginRoute_1 = require("./v1/auth/login/loginRoute");
const audioRoute_1 = require("./v1/audio/audioRoute");
class Routes {
    path() {
        const router = express_1.default.Router();
        router.use("/register", registerRoute_1.signUpRoute);
        router.use("/login", loginRoute_1.loginRoute);
        router.use("/audio", audioRoute_1.AudioRoute);
        router.all("/*", (req, res) => {
            return res.status(404).json({ error: "URL Not Found!" });
        });
        return router;
    }
}
exports.Routes = Routes;
