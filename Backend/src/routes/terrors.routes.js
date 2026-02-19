import { Router } from "express";
import { createTable } from "../controllers/terrors.controller.js";

const router = Router();

router.get('/api/terrorists', createTable)

router.post('/api/data', createTable)


export default router;