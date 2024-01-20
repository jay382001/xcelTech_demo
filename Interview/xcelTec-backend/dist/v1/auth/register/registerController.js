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
exports.RegisterController = void 0;
const responseBuilder_1 = require("../../../response/responseBuilder");
const en_1 = require("../../../response/en");
const constant_1 = require("../../../response/constant");
const registerUtils_1 = require("./registerUtils");
class RegisterController {
    constructor() {
        this.constant = new constant_1.constant();
        this.registerUtils = new registerUtils_1.registerUtils();
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const result = yield this.registerUtils.register(payload);
                if (result.success) {
                    if (result.isExist) {
                        return res.status(this.constant.STATUS.VALIDATION).json(responseBuilder_1.ResponseBuilder.isExist(en_1.MESSAGE.USER_MESSAGES.EMAIL_ALREADY_EXISTED));
                    }
                    else {
                        return res.status(this.constant.STATUS.CREATED).json(responseBuilder_1.ResponseBuilder.success(result.data, en_1.MESSAGE.USER_MESSAGES.EMAIL_REGISTER));
                    }
                }
                else {
                    if (!result.isValid) {
                        return res.status(this.constant.STATUS.FORBIDDEN).json(responseBuilder_1.ResponseBuilder.validationError(en_1.MESSAGE.USER_MESSAGES.INVALID_EMAILID));
                    }
                    else {
                        return res.status(this.constant.STATUS.INTERNAL_SERVER_ERROR).json(responseBuilder_1.ResponseBuilder.error(en_1.MESSAGE.USER_MESSAGES.REGISTRATION_FAILED));
                    }
                }
            }
            catch (error) {
                return res.json(error);
            }
        });
    }
}
exports.RegisterController = RegisterController;
