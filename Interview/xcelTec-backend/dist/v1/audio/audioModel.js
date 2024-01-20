"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioModel = void 0;
const mongoose_1 = require("mongoose");
const audioSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    audio: {
        type: String,
        required: true
    }
});
const AudioModel = (0, mongoose_1.model)('audio', audioSchema);
exports.audioModel = AudioModel;
