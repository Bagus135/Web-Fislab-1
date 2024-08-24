import { createShortLink,deleteShortlink,getAllShortLink } from "../controller/shortlink.controller.js";
import express from "express";
import tokenChecker from "../middleware/tokenChecker.js";
import aslabChecker from "../middleware/aslabChecker.js";

const ShortlinkRoutes = express.Router()

ShortlinkRoutes.get("/all", getAllShortLink);
ShortlinkRoutes.post("/:uid", tokenChecker, aslabChecker, createShortLink);
ShortlinkRoutes.delete("/:id", tokenChecker, aslabChecker, deleteShortlink);

export default ShortlinkRoutes
