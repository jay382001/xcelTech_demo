import express, { Router } from 'express';
import { RegisterController } from "./registerController";
const router = express();

var controller: RegisterController = new RegisterController();

router.post('/signUp', controller.register);

export const signUpRoute: Router = router ;