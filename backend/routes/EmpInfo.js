import exprees from 'express';
import { login, signup } from '../controllers/EmpInfo.js';

const router=exprees.Router();

router.post("/signup",signup);
router.post("/login",login)

export default router;