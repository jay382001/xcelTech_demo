import express, { Response } from 'express';
import { ResponseBuilder } from '../../../response/responseBuilder';
import { MESSAGE } from "../../../response/en";
import { constant } from '../../../response/constant';
import { LoginUtils } from './loginUtils';

export class LoginController {
    private constant: constant = new constant();
    private loginUtils: LoginUtils = new LoginUtils();

    public login = async (req: any, res: Response) => {
        try {
            const payload = req.body;
            const result = await this.loginUtils.login(payload);
            if (result.success) {
                return res.status(this.constant.STATUS.OK).json(ResponseBuilder.login(MESSAGE.USER_MESSAGES.LOGIN));
            } else {
                return res.status(this.constant.STATUS.FORBIDDEN).json(ResponseBuilder.passwordNotMatch(MESSAGE.USER_MESSAGES.INVALID_CREDENTIAL));
            }
        } catch (error) {
            return res.status(this.constant.STATUS.INTERNAL_SERVER_ERROR).json(ResponseBuilder.error(MESSAGE.USER_MESSAGES.LOGIN_FAILED));
        }
    }
}