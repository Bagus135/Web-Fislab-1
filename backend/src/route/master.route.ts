import { editRole } from "../controller/master.controller.js";
import express from "express";
import tokenChecker from "../middleware/tokenChecker.js";
import masterChecker from "../middleware/masterChecker.js";

const masterRoutes = express.Router();

masterRoutes.put('/role/:uid', tokenChecker, masterChecker, editRole)

export default masterRoutes