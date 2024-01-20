import express, { Router } from 'express';
const router = express();
import { LoginController } from "./loginController";

const controller: LoginController = new LoginController();

router.post('/', controller.login);

export const loginRoute: Router = router ;