import { getAslabSessionClass,checkQuotaSchedule,editScheduleAslab,getAllScheduleAslab} from "../controller/aslabSchedule.controller.js";
import tokenChecker from "../middleware/tokenChecker.js";
import aslabChecker from "../middleware/aslabChecker.js";
import express from 'express';
import { getSchedule } from "../controller/praktikan.controller.js";
import praktikanChecker from "../middleware/praktikanChecker.js";

const ScheduleRoutes = express.Router();

ScheduleRoutes.get('/praktikan', tokenChecker, praktikanChecker, getSchedule);
ScheduleRoutes.get('/aslab', tokenChecker, aslabChecker, getAslabSessionClass);
ScheduleRoutes.put('/aslab/:uidJudul/:idKel', tokenChecker, aslabChecker, checkQuotaSchedule, editScheduleAslab);
ScheduleRoutes.get('/aslab/all', tokenChecker,aslabChecker,getAllScheduleAslab);

export default ScheduleRoutes

