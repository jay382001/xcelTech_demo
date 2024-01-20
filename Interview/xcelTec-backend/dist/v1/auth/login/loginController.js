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
exports.LoginController = void 0;
const responseBuilder_1 = require("../../../response/responseBuilder");
const en_1 = require("../../../response/en");
const constant_1 = require("../../../response/constant");
const loginUtils_1 = require("./loginUtils");
class LoginController {
    constructor() {
        this.constant = new constant_1.constant();
        this.loginUtils = new loginUtils_1.LoginUtils();
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const result = yield this.loginUtils.login(payload);
                if (result.success) {
                    return res.status(this.constant.STATUS.OK).json(responseBuilder_1.ResponseBuilder.login(en_1.MESSAGE.USER_MESSAGES.LOGIN));
                }
                else {
                    return res.status(this.constant.STATUS.FORBIDDEN).json(responseBuilder_1.ResponseBuilder.passwordNotMatch(en_1.MESSAGE.USER_MESSAGES.INVALID_CREDENTIAL));
                }
            }
            catch (error) {
                return res.status(this.constant.STATUS.INTERNAL_SERVER_ERROR).json(responseBuilder_1.ResponseBuilder.error(en_1.MESSAGE.USER_MESSAGES.LOGIN_FAILED));
            }
        });
    }
}
exports.LoginController = LoginController;
