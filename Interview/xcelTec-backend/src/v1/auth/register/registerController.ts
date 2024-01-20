import express, { Response } from 'express';
import { ResponseBuilder } from '../../../response/responseBuilder';
import { MESSAGE } from "../../../response/en";
import { constant } from '../../../response/constant';
import { registerUtils } from './registerUtils';

export class RegisterController {
    private constant: constant = new constant();
    private registerUtils: registerUtils = new registerUtils();

    public register = async (req: any, res: Response) => {
        try {
            const payload = req.body;
            const result = await this.registerUtils.register(payload);
            if (result.success) {
                if (result.isExist) {
                    return res.status(this.constant.STATUS.VALIDATION).json(ResponseBuilder.isExist(MESSAGE.USER_MESSAGES.EMAIL_ALREADY_EXISTED));
                } else {
                    return res.status(this.constant.STATUS.CREATED).json(ResponseBuilder.success(result.data, MESSAGE.USER_MESSAGES.EMAIL_REGISTER));
                }
            } else {
                if (!result.isValid) {
                    return res.status(this.constant.STATUS.FORBIDDEN).json(ResponseBuilder.validationError(MESSAGE.USER_MESSAGES.INVALID_EMAILID));
                } else {
                    return res.status(this.constant.STATUS.INTERNAL_SERVER_ERROR).json(ResponseBuilder.error(MESSAGE.USER_MESSAGES.REGISTRATION_FAILED));
                }
            }
        } catch (error) {
            return res.json(error);
        }
    }
}