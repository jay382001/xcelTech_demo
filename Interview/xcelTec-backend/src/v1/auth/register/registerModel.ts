import { Schema, model } from "mongoose";

interface RegistrationModel {
    email: string,
    password: string
}

const registrationSchema = new Schema<RegistrationModel>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const RegistrationModel = model<RegistrationModel>('registers', registrationSchema);

export const registrationModel = RegistrationModel;