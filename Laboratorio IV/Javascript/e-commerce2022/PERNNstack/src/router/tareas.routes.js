import Router  from  "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.constroller.js";
import {isAuth} from "../milddlewares/auth.middleware.js"

const router = Router();

router.get('/tareas',isAuth, listarTarea);

router.get('/tareas/:id',isAuth, listarTareas);

router.post('/tareas',isAuth, crearTarea);

router.put('/tareas/:id',isAuth, actualizarTarea);

router.delete('/tareas/:id',isAuth, eliminarTarea);

export default router;