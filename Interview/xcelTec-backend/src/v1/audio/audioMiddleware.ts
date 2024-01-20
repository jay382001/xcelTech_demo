import { Response } from "express";
import { ResponseBuilder } from '../../response/responseBuilder';
import fs from 'fs';
import mv from 'mv';

export class AudioMiddleware {

    public async fileupload(req: any, res: Response, next: () => void) {
        let temp = await new Promise(async (resolve, reject) => {
            const imgArr: any = [];
            const path = './uploads/';
            const publicDir = './uploads';
            if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir);
            }
            if (req.files.length < 1) {
                return res.status(400).json(ResponseBuilder.error("Please upload atleast single file!", 400));
            } else {
                for (let i = 0; i < req.files.length; i++) {
                    if (req.files[i].mimetype == "application/pdf" || req.files[i].mimetype == "audio/mpeg" || req.files[i].mimetype == "audio/mp3") {
                        const timeStampInMs = new Date().getTime();
                        const newFilename = timeStampInMs + '_' + req.files[i].originalname;
                        const oldpath = req.files[i].path;
                        const newpath = path + newFilename;
                        mv(oldpath, newpath, function (err: any) {
                            if (err) {
                                reject(err);
                            }
                            const obj = {
                                'filename': req.files[i].originalname,
                                'newFilename': newFilename,
                                'size': req.files[i].size,
                                'path': newpath,
                            };
                            imgArr.push(obj);
                            if (i == req.files.length - 1) {
                                req._filedata = imgArr;
                                resolve(imgArr);
                                return;
                            }
                        });
                    } else {
                        return res.status(400).json(ResponseBuilder.error("File should be pdf type", 400));
                    }
                }

            }
        });
        if (temp) {
            next();
        } else {
            return res.status(50010).json(ResponseBuilder.error(req.t("ERR_INTERNAL_SERVER"), 500));
        }
    }
}