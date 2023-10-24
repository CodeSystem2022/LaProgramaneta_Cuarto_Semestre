import express from 'express';
import morgan from 'morgan';
import tareasRoutes from "./router/tareas-routes.js";
import authRoutes from "./router/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded(( extended: false )));

app.get("/", (req, res) => res.json(( message: "bienveni a mi proyecto")));
app.use("/api",tareasRoutes);
app.use("/api",authRoutes);

//mensaje de errores
app.use((err, req, res, next) => {
    res.status(500).json((
        status: "error",
        message: err.message
    ));
});

export default app;