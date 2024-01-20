import express, { Router } from 'express';
const router = express();
import { AudioController } from './audioController';
import { AudioMiddleware } from './audioMiddleware';

const controller: AudioController = new AudioController();
const middleware: AudioMiddleware = new AudioMiddleware();

router.post('/insert', middleware.fileupload, controller.create);

export const AudioRoute: Router = router;