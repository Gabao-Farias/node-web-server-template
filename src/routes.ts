import { Router } from 'express';
import { UserController, SurveyController } from './controllers';

const router = Router();

const surveyController = new SurveyController();
const userController = new UserController();

// POST
router.post('/surveys', surveyController.create);
router.post('/users', userController.create);

// GET
router.get('/surveys', surveyController.show);

export { router };
