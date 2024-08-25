import express from 'express';
import { editUserProfile, getAllUser, getDetailProfile, getJudulAslab } from '../controller/profile.controller.js';
import tokenChecker from '../middleware/tokenChecker.js';
const profileRoutes = express.Router();
profileRoutes.get('/user', tokenChecker, getAllUser);
profileRoutes.get('/user/:uid', tokenChecker, getDetailProfile);
profileRoutes.put('/user/:uid', tokenChecker, editUserProfile);
profileRoutes.get('/aslab/:uid', tokenChecker, getJudulAslab);
export default profileRoutes;
