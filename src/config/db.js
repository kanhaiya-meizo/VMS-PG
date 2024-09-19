import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);


const connectToDB = async() => {
    try {
        await pool;
        console.log("DB connected successfully.");
    } catch (error) {
        console.error("Failed to connect to the db", error);
        // exit the process with the error code
        process.exit(1);
    }
}

export const query = (text, params) => pool.query(text, params);
export default connectToDB;