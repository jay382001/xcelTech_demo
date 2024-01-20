"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationModel = void 0;
const mongoose_1 = require("mongoose");
const registrationSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
const RegistrationModel = (0, mongoose_1.model)('registers', registrationSchema);
exports.registrationModel = RegistrationModel;
