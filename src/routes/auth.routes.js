import { Router } from 'express';
import { registerController, loginController, profileController } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();


router.post('/register', registerController)

router.post('/login', loginController)

router.get('/profile', authRequired, profileController)


export default router;