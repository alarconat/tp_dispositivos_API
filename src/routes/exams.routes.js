import {Router} from 'express';
import { getExams, getExamById, createExam, updateExam, deleteExam } from '../controllers/exams.controller.js';

const router = Router();

router.get('/exams', getExams);
router.get('/exams/:id', getExamById);
router.post('/exams', createExam);
router.put('/exams/:id', updateExam);
router.delete('/exams/:id', deleteExam);

export default router;