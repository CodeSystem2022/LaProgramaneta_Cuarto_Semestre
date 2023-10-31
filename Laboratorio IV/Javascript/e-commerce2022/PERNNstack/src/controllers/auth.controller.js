import {pool} from "../db.js"
import bcrypt from  "bcrypt";
import {createAccessToken} from "../libs/jwj.js"

export const singin = async (req, res) => {
    const {email, password} = req.body;

    const result = pool.query("SELECT * FROM usuarios WHERE email = $1", [email])

    if(result.rowCount === 0){
        return res.status(400).json({menssage: 'El correo no esta registrado'})
    }

    const valiPassword = await bcrypt.compare(password, result.rows[0].password);

    if(!valiPassword){
        return res.status(400).json({message: 'La contraseña es incorrecta'});
    }

    const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
        res.cookie("token", token, {
            httpOnly: true,
            semeSite: "none",
            maxAge: 60 * 60 * 24 * 100, }) // 1 day})
        return req.json(result.rows[0]);
}

export const singnup = async(req, res) => {
    const {name, email, password} = req.body;
 
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(heshedPassord);

        const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)  RETURNING *", [name, email, hashedPasswordpassword])
    
        const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
        res.cookie("token", token, {
            httpOnly: true,
            semeSite: "none",
            maxAge: 60 * 60 * 24 * 100, }) // 1 day})
        return req.json(result.rows[0]);

    } catch (error) {
         if(error.code === "23505"){
            return res.status(400).json({menssage : "El correo ya existe"});
         }
         
    }
};



export const singnout = (req, res) => res.send("Cerrando sesion");

export const profile = (req, res) => res.send("Perfil de usuario")
