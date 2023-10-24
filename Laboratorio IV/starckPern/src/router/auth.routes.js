import {Router} from "express";
import {sigin, signup, signout, signprofile, singin, singup, singout, profile} from "../controllers/aut.controllers.js"

const router = Router();

router.post("/signin", singin);

router.post("/signup", singup);

router.post("/signout", singout);

router.get("/profile", profile);


export default router;