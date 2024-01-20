import { VALIDATE } from '../../../validate';
import bcrypt from 'bcrypt';

export class RegisterMiddleware {
    public async generatePassword(password: any) {
        const bcrypt_password = await bcrypt.hash(password, 10);
        return { password, bcrypt_password };
    }

    public async checkEmailValidation(email: string) {
        const verify = await VALIDATE.emailRegex.test(email);
        return verify;
    }
}