import {Router} from 'express';
import { getHomeissues, getHomeissueById, createHomeissue, updateHomeissue, deleteHomeissue } from '../controllers/homseissues.controller.js';

const router = Router();

router.get('/homeissues', getHomeissues);
router.get('/homeissues/:id', getHomeissueById);
router.post('/homeissues', createHomeissue);
router.put('/homeissues/:id', updateHomeissue);
router.delete('/homeissues/:id', deleteHomeissue);

export default router;