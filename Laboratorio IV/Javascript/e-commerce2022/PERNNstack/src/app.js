import express from "express";
import morgan from "morgan";
import tareaRouter from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"
import cookieParser  from "cookie-parser";

const app = express();

//MILDDLEWERS
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.get("/", (req, res) => res.json({message: "Bienvenidos a mi proyecto"}));
app.use('/api',tareaRouter);
app.use('/api', authRoutes);

//app.get("/", (req, res) => {
//    throw new Error('Error generado or el usuario');
//    res.send('test')
//});

//MANEJANDO ERRORES
app.use((err, req, res, next) => {
    res.status(500).jeson({
        status: "error",
        message: errorMap.message
    });
});



export default app;