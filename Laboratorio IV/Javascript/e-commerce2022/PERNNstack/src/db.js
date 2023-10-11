import pg from "pg";

export const pool = new pg.Pool ({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
});

pool.on("connect", () => {
    console.log("connectado a la base de datos");
});