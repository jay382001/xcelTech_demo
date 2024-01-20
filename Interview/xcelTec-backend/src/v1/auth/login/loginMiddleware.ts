import bcrypt from 'bcrypt';

export class LoginMiddleware {
    public async comparePassword(input_password: string, db_password: string) {
        const result = await bcrypt.compare(input_password, db_password);
        return result;
    }
}