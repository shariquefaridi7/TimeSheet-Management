import express from "express";
import { addSheet, getAllSheet, getSheet, updateSheet,rating } from "../controllers/TimeSheet.js";

const router =express.Router();

router.post("/timeSheet/:userId",addSheet);
router.get("/timeSheet/:userId",getSheet);
router.put("/timeSheet/:id",updateSheet);
router.put("/timeSheet/rating/:id",rating);
router.get("/timeSheet",getAllSheet);

export default router;