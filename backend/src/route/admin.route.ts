import { getViewScoreAdmin,addJudulAslab, getAllGroupPraktikan, getAllJudulAslab, getAllWeekSchedule, deleteWeekSchedule, addWeekSchedule, addPraktikanGroupMember, deleteJudulAslab, updateFinalScore, resetFinalScore, createInfo, getInfo, deleteInfo } from "../controller/admin.controller.js";
import express from 'express';
import tokenChecker from "../middleware/tokenChecker.js";
import adminChecker from "../middleware/adminChecker.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/viewscore", tokenChecker, adminChecker, getViewScoreAdmin );

AdminRoutes.put("/allscore/sync", tokenChecker, adminChecker, updateFinalScore );
AdminRoutes.delete("/allscore/reset", tokenChecker, adminChecker, resetFinalScore );
//Create Praktikan Kelompok
AdminRoutes.post("/kelompok/praktikan/:uid", tokenChecker, adminChecker, addPraktikanGroupMember)
AdminRoutes.get("/kelompok/praktikan", tokenChecker, adminChecker, getAllGroupPraktikan)

//register judul aslab
AdminRoutes.post("/judulaslab/:uid", tokenChecker, adminChecker, addJudulAslab);
AdminRoutes.delete("/judulaslab/:id", tokenChecker, adminChecker, deleteJudulAslab );
AdminRoutes.get("/judulaslab", tokenChecker, adminChecker, getAllJudulAslab );

// Matching Kelompok-Aslab
AdminRoutes.post('/weekschedule/:id', tokenChecker, adminChecker, addWeekSchedule)
AdminRoutes.get('/weekschedule', tokenChecker, adminChecker, getAllWeekSchedule)
AdminRoutes.delete('/weekschedule/:id/:no', tokenChecker, adminChecker, deleteWeekSchedule)

AdminRoutes.post('/info/:uid', tokenChecker, adminChecker, createInfo)
AdminRoutes.get('/info/all', tokenChecker, getInfo)
AdminRoutes.delete('/info/:id', tokenChecker, adminChecker, deleteInfo)



export default AdminRoutes