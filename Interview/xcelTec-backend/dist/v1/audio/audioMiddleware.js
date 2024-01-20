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
exports.AudioMiddleware = void 0;
const responseBuilder_1 = require("../../response/responseBuilder");
const fs_1 = __importDefault(require("fs"));
const mv_1 = __importDefault(require("mv"));
class AudioMiddleware {
    fileupload(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body, req.files, req.image);
            let temp = yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const imgArr = [];
                const path = './uploads/';
                const publicDir = './uploads';
                if (!fs_1.default.existsSync(publicDir)) {
                    fs_1.default.mkdirSync(publicDir);
                }
                if (req.files.length < 1) {
                    return res.status(400).json(responseBuilder_1.ResponseBuilder.error("Please upload atleast single file!", 400));
                }
                else {
                    for (let i = 0; i < req.files.length; i++) {
                        if (req.files[i].mimetype == "application/pdf" || req.files[i].mimetype == "audio/mpeg" || req.files[i].mimetype == "audio/mp3") {
                            const timeStampInMs = new Date().getTime();
                            const newFilename = timeStampInMs + '_' + req.files[i].originalname;
                            const oldpath = req.files[i].path;
                            const newpath = path + newFilename;
                            (0, mv_1.default)(oldpath, newpath, function (err) {
                                if (err) {
                                    reject(err);
                                }
                                const obj = {
                                    'filename': req.files[i].originalname,
                                    'newFilename': newFilename,
                                    'size': req.files[i].size,
                                    'path': newpath,
                                };
                                imgArr.push(obj);
                                if (i == req.files.length - 1) {
                                    req._filedata = imgArr;
                                    resolve(imgArr);
                                    return;
                                }
                            });
                        }
                        else {
                            return res.status(400).json(responseBuilder_1.ResponseBuilder.error("File should be pdf type", 400));
                        }
                    }
                }
            }));
            if (temp) {
                next();
            }
            else {
                return res.status(50010).json(responseBuilder_1.ResponseBuilder.error(req.t("ERR_INTERNAL_SERVER"), 500));
            }
        });
    }
}
exports.AudioMiddleware = AudioMiddleware;
