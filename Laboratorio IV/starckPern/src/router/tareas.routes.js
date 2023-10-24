import {Router} from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router();

router.get('/tareas', listarTarea);

router.post('/tareas/:id', listarTarea );

router.put('/tareas', crearTarea);

router.get('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea );



export default router;