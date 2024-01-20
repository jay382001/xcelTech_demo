import { Schema, model } from "mongoose";

interface AudioModel {
    name: string,
    description: string,
    image: string,
    audio: String
}

const audioSchema = new Schema<AudioModel>({
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

const AudioModel = model<AudioModel>('audio', audioSchema);

export const audioModel = AudioModel;