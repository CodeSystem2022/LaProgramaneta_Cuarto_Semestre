import  jwt  from "jsonwebtoken";
import { token } from "morgan";

export const isAuth = (req, res, next) => {
    console.log(req.cookies.tokek);

    if (!tokek) {
        return res.status(401).json({
            message: "No estas autorizado"
        });
    }

    jwt.verify(token, "xyz123", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'No esta atorizado' 
             });
        }
        req.usuarioId = decoded.id;
        next();
    });
};