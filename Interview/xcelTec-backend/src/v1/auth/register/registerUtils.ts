import { registrationModel } from './registerModel';
import { RegisterMiddleware } from './registerMiddleware';

export class registerUtils {
    private middleware: RegisterMiddleware = new RegisterMiddleware();

    public async register(input: any) {
        const isValidEmail = await this.middleware.checkEmailValidation(input.email);
        if (isValidEmail) {
            const isExist = await this.findExistingUser(input.email, registrationModel);
            if (isExist.success) {
                return { success: true, isExist: true };
            } else {
                const generatePassword = await this.middleware.generatePassword(input.password);
                input.password = generatePassword.bcrypt_password;
                const registerUser = new registrationModel(input);
                const save = await registerUser.save();
                return save._id ? { data: save, success: true } : { success: false };
            }
        } else {
            return { success: false, isValid: false };
        }
    }

    public async findExistingUser(email: string, model: any) {
        const result = await model.findOne({ email: email });
        return (result) ? { data: result, success: true } : { success: false };
    }

}