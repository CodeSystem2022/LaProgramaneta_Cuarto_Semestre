import Router  from  "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.constroller.js";

const router = Router();

router.get('/tareas', listarTarea);

router.get('/tareas/:id', listarTareas);

router.post('/tareas', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id', eliminarTarea);

export default router;