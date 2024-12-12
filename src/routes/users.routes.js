import {Router} from 'express';
import {getUsers, getUserById, updateUser, deleteUser} from '../controllers/users.controller.js';
import { authenticateToken } from './../middlware/auth.middleware.js';
const router = Router();

router.get('/users',authenticateToken, getUsers);
router.get('/users/:id',authenticateToken, getUserById);
router.put('/users/:id',authenticateToken, updateUser);
router.delete('/users/:id',authenticateToken, deleteUser);


export default router;