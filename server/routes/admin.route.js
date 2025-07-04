import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong } from "../controllers/admin.controller.js";

const router = Router();

router.post("/songs", protectRoute, requireAdmin, createSong);

export default router;
