import express from 'express';
import { signUpRoute } from "./v1/auth/register/registerRoute";
import { loginRoute } from "./v1/auth/login/loginRoute";
import { AudioRoute } from "./v1/audio/audioRoute";

export class Routes {

    public path() {
        const router = express.Router();

        router.use("/register", signUpRoute);
        router.use("/login", loginRoute);
        router.use("/audio", AudioRoute);

        router.all("/*", (req, res) => {
            return res.status(404).json({ error: "URL Not Found!" });
        });
        return router;
    }

}