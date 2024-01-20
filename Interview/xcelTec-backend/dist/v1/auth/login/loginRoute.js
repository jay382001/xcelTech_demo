"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const loginController_1 = require("./loginController");
const controller = new loginController_1.LoginController();
router.post('/', controller.login);
exports.loginRoute = router;
