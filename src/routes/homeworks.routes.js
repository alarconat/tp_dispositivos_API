import {Router} from 'express';

import { getHomeworks, getHomeworkById, createHomework, updateHomework, deleteHomework } from '../controllers/homeworks.controller.js';

const router = Router();

router.get('/homeworks', getHomeworks);
router.get('/homeworks/:id', getHomeworkById);
router.post('/homeworks', createHomework);
router.put('/homeworks/:id', updateHomework);
router.delete('/homeworks/:id', deleteHomework);

export default router;
