import { Router } from "express";
import { getDataFromCsv, saveResult } from "../controllers/terrors.controller.js";

const router = Router();

router.get('/api/terrorists', getDataFromCsv)

router.post('/api/data', saveResult)

  
export default router;