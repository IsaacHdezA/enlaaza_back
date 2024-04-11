import * from dotenv;

if(!process.env.ENV) {
  console.log("No environment value specified...");
}

const mysql = require("mysql2");
const environment = process.env.ENV as string;
const config = require("../config/dbConf.json")[environment]["mysql"];

const database = {
  host: config.host,
  port: config.port,
  user: config.root,
  password: config.password,
  database: config.database
};

const connection = mysql.createPool(database);

connection.getConnection((err, conn) => {
  if(err) console.log("[MYSQL]: There was an error with MySQL service: ", err);

  if(conn) {
    conn.release();
    console.log("[MYSQL]: Connection to MySQL succesful");
  } else {
    console.log("[MYSQL]: Failed to connect to MySQL");
  }
});

module.exports = connection;
