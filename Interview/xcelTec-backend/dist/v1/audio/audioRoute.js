"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioRoute = void 0;
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const audioController_1 = require("./audioController");
const audioMiddleware_1 = require("./audioMiddleware");
const controller = new audioController_1.AudioController();
const middleware = new audioMiddleware_1.AudioMiddleware();
router.post('/insert', middleware.fileupload, controller.create);
exports.AudioRoute = router;
