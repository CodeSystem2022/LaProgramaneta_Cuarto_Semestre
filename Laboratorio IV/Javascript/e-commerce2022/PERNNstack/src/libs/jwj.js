import jwt  from "jsonwebtoken";

export const createAccessToken = (plylod) => {
    return new Promise((resolve, reject) =>  {
       jwt.sign(plylod, "xyz123", { expiresIn: "1d" },
       (err, token) => {
        if(err) reject(err);
        resolve(token);
    });  
    });
   
}