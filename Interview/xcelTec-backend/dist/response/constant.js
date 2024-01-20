"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = void 0;
class constant {
    constructor() {
        this.STATUS = {
            OK: 200,
            CREATED: 201,
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401,
            NOT_FOUND: 404,
            INTERNAL_SERVER_ERROR: 500,
            FORBIDDEN: 403,
            UNPROCESSABLEENTITY: 422,
            NO_CONTENT: 204,
            VALIDATION: 202,
            CONFLICT: 409
        };
    }
}
exports.constant = constant;
