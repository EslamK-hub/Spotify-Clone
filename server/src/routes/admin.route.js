import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Admin Page");
});

export default router;
