import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export class Connect {
    public connectdb = async () => {
        try {
            const conn = await mongoose.connect(`${process.env.DB_CONNECTION}/${process.env.DB_NAME}`);
            if (conn) {
                console.log('mongoDB connect!!!');
            }
        } catch (error) {
            console.log(error, 'mongodb not connected');
        }
    }
}