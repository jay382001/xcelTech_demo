export class ResponseBuilder {
    public code: number | undefined;
    public message: string | undefined;
    public error: string | undefined;
    public status: boolean | undefined;
    public result: any;

    public static success(input: any, msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 200,
        obj.status = true,
        obj.message = msg,
        obj.result = input
        return obj;
    };

    public static error(msg: any, error_code?:number): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = error_code || 204;
        obj.message = msg;
        obj.status = false;
        return obj;
    };

    public static conflict(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 409;
        obj.message = msg;
        obj.status = false;
        return obj;
    };

    public static dataNotFound(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 404;
        obj.status = false;
        obj.message = msg
        return obj;
    };

    public static isExist(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 202;
        obj.status = false;
        obj.message = msg
        return obj;
    };

    public static passwordNotMatch(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 403;
        obj.status = false;
        obj.message = msg
        return obj;
    };

    public static login(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 200;
        obj.status = true;
        obj.message = msg
        return obj;
    };

    public static validationError(msg: any): ResponseBuilder {
        const obj: ResponseBuilder = new ResponseBuilder();
        obj.code = 403;
        obj.status = false;
        obj.message = msg
        return obj;
    };
}