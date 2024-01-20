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
exports.AudioController = void 0;
const responseBuilder_1 = require("../../response/responseBuilder");
const en_1 = require("../../response/en");
const constant_1 = require("../../response/constant");
const audioUtils_1 = require("./audioUtils");
class AudioController {
    constructor() {
        this.constant = new constant_1.constant();
        this.audioUtils = new audioUtils_1.AudioUtils();
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                const payload = req.body;
                const result = yield this.audioUtils.create(payload, req._filedata);
                // if (result.success) {
                //     return res.status(this.constant.STATUS.OK).json(ResponseBuilder.login(MESSAGE.USER_MESSAGES.LOGIN));
                // } else {
                //     return res.status(this.constant.STATUS.FORBIDDEN).json(ResponseBuilder.passwordNotMatch(MESSAGE.USER_MESSAGES.INVALID_CREDENTIAL));
                // }
            }
            catch (error) {
                return res.status(this.constant.STATUS.INTERNAL_SERVER_ERROR).json(responseBuilder_1.ResponseBuilder.error(en_1.MESSAGE.USER_MESSAGES.LOGIN_FAILED));
            }
        });
    }
}
exports.AudioController = AudioController;
