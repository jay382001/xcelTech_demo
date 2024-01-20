"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRoute = void 0;
const express_1 = __importDefault(require("express"));
const registerController_1 = require("./registerController");
const router = (0, express_1.default)();
var controller = new registerController_1.RegisterController();
router.post('/signUp', controller.register);
exports.signUpRoute = router;
