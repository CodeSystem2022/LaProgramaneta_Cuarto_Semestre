import {pool} from "../db.js"
import bcrypt from  "bcrypt";
import {createAccessToken} from "../libs/jwj.js"

export const singin = (req, res) => res.send("ingresando");

export const singnup = async(req, res) => {
    const {name, email, password} = req.body;
 
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(heshedPassord);

        const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)  RETURNING *", [name, email, hashedPasswordpassword])
    
        const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
        //return req.json(result.rows[0]);
        return res.json({
            token: token,
        });
    } catch (error) {
         if(error.code === "23505"){
            return res.status(400).json({menssage : "El correo ya existe"});
         }
         
    }
};



export const singnout = (req, res) => res.send("Cerrando sesion");

export const profile = (req, res) => res.send("Perfil de usuario")
