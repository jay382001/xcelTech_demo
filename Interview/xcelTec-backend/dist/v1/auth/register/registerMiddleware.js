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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMiddleware = void 0;
const validate_1 = require("../../../validate");
const bcrypt_1 = __importDefault(require("bcrypt"));
class RegisterMiddleware {
    generatePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const bcrypt_password = yield bcrypt_1.default.hash(password, 10);
            return { password, bcrypt_password };
        });
    }
    checkEmailValidation(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const verify = yield validate_1.VALIDATE.emailRegex.test(email);
            return verify;
        });
    }
}
exports.RegisterMiddleware = RegisterMiddleware;
