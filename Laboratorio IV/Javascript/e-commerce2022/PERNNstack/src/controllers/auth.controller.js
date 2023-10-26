export const singin = (req, res) => res.send("ingresando");

export const singnup = async(req, res) => {
    const {name, email, password} = req.body;
    res.send("Registrando");

    const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    console.log(result);
};



export const singnout = (req, res) => res.send("Cerrando sesion");

export const profile = (req, res) => res.send("Perfil de usuario")
