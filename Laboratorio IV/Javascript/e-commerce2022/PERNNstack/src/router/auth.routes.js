import  Router  from "express-promise-router";
import { singin, singnup, singnout, profile } from "../controllers/auth.controller.js";
import { isAsync } from "../milddlewares/auth.middleware.js";


const router = Router();

router.post("/signin", singin);

router.post("/signup", singnup);

router.post("/signout", singnout);

router.get("/profile",isAsync, profile);

export default router;