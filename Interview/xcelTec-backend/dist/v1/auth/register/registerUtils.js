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
exports.registerUtils = void 0;
const registerModel_1 = require("./registerModel");
const registerMiddleware_1 = require("./registerMiddleware");
class registerUtils {
    constructor() {
        this.middleware = new registerMiddleware_1.RegisterMiddleware();
    }
    register(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidEmail = yield this.middleware.checkEmailValidation(input.email);
            if (isValidEmail) {
                const isExist = yield this.findExistingUser(input.email, registerModel_1.registrationModel);
                if (isExist.success) {
                    return { success: true, isExist: true };
                }
                else {
                    const generatePassword = yield this.middleware.generatePassword(input.password);
                    input.password = generatePassword.bcrypt_password;
                    const registerUser = new registerModel_1.registrationModel(input);
                    const save = yield registerUser.save();
                    return save._id ? { data: save, success: true } : { success: false };
                }
            }
            else {
                return { success: false, isValid: false };
            }
        });
    }
    findExistingUser(email, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield model.findOne({ email: email });
            return (result) ? { data: result, success: true } : { success: false };
        });
    }
}
exports.registerUtils = registerUtils;
