"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = void 0;
class ResponseBuilder {
    static success(input, msg) {
        const obj = new ResponseBuilder();
        obj.code = 200,
            obj.status = true,
            obj.message = msg,
            obj.result = input;
        return obj;
    }
    ;
    static error(msg, error_code) {
        const obj = new ResponseBuilder();
        obj.code = error_code || 204;
        obj.message = msg;
        obj.status = false;
        return obj;
    }
    ;
    static conflict(msg) {
        const obj = new ResponseBuilder();
        obj.code = 409;
        obj.message = msg;
        obj.status = false;
        return obj;
    }
    ;
    static dataNotFound(msg) {
        const obj = new ResponseBuilder();
        obj.code = 404;
        obj.status = false;
        obj.message = msg;
        return obj;
    }
    ;
    static isExist(msg) {
        const obj = new ResponseBuilder();
        obj.code = 202;
        obj.status = false;
        obj.message = msg;
        return obj;
    }
    ;
    static passwordNotMatch(msg) {
        const obj = new ResponseBuilder();
        obj.code = 403;
        obj.status = false;
        obj.message = msg;
        return obj;
    }
    ;
    static login(msg) {
        const obj = new ResponseBuilder();
        obj.code = 200;
        obj.status = true;
        obj.message = msg;
        return obj;
    }
    ;
    static validationError(msg) {
        const obj = new ResponseBuilder();
        obj.code = 403;
        obj.status = false;
        obj.message = msg;
        return obj;
    }
    ;
}
exports.ResponseBuilder = ResponseBuilder;
