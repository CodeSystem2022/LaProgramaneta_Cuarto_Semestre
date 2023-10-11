import { Router } from "express";
import { singin, singnup, singnout, profile } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", singin);

router.post("/signup", singnup);

router.post("/signout", singnout);

router.get("/profile", profile);

export default router;