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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUtils = void 0;
const registerModel_1 = require("../register/registerModel");
const registerUtils_1 = require("../register/registerUtils");
const loginMiddleware_1 = require("./loginMiddleware");
class LoginUtils {
    constructor() {
        this.registerUtils = new registerUtils_1.registerUtils();
        this.loginMiddleware = new loginMiddleware_1.LoginMiddleware();
    }
    login(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = yield this.registerUtils.findExistingUser(input.email, registerModel_1.registrationModel);
            if (findUser.success) {
                const userData = findUser.data;
                const comparePassword = yield this.loginMiddleware.comparePassword(input.password, userData.password);
                return comparePassword ? { success: true } : { success: false };
            }
            else {
                return { success: false };
            }
        });
    }
}
exports.LoginUtils = LoginUtils;
