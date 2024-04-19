import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.ENV) {
  console.log("No environment value specified...");
  process.exit();
}

import mysql from "mysql2";
import { PoolConnection } from "mysql2";
import { User } from "../user/user";

const environment = process.env.ENV;
const config = require("./dbConf.json")[environment]["mysql"];

const database = {
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
};

const connection = mysql.createPool(database);

connection.getConnection((err: Error | null, conn: PoolConnection) => {
  if (err) console.log("[MYSQL]: There was an error with MySQL service: ", err);

  if (conn) {
    conn.release();
    console.log("[MYSQL]: Connection to MySQL succesful");
  } else {
    console.log("[MYSQL]: Failed to connect to MySQL");
  }
});

export { connection };
