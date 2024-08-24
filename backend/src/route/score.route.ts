import { editScore, getSessionAslab } from "../controller/aslabScorer.controler.js";
import { getNilai } from "../controller/praktikan.controller.js";
import praktikanChecker from "../middleware/praktikanChecker.js";
import tokenChecker from "../middleware/tokenChecker.js";
import aslabChecker from "../middleware/aslabChecker.js";
import express from 'express'

const ScoreRoutes = express.Router();

ScoreRoutes.get("/praktikan/", tokenChecker, praktikanChecker, getNilai);
ScoreRoutes.get("/aslabsession/:uid", tokenChecker, aslabChecker, getSessionAslab);
ScoreRoutes.put("/aslab/:uid/:idKel", tokenChecker, aslabChecker, editScore);

export default ScoreRoutes
