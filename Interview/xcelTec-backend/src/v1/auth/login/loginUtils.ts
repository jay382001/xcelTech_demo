import { registrationModel } from '../register/registerModel';
import { registerUtils } from '../register/registerUtils';
import { LoginMiddleware } from './loginMiddleware';

export class LoginUtils {
    private registerUtils: registerUtils = new registerUtils();
    private loginMiddleware: LoginMiddleware = new LoginMiddleware();

    public async login(input: any) {
        const findUser = await this.registerUtils.findExistingUser(input.email, registrationModel);
        if (findUser.success) {
            const userData = findUser.data;
            const comparePassword = await this.loginMiddleware.comparePassword(input.password, userData.password);
            return comparePassword ? { success: true } : { success: false };
        } else {
            return { success: false };
        }
    }
}