import { faker } from "@faker-js/faker/locale/es";
import { Pool, PoolConnection } from "mysql2";
import { connection } from "../src/config/connection";
import { userSeeder } from "./seeders/user.seeder";

const MAX_USERS: number = 100;

connection.getConnection(
  async (error: Error | null, connection: PoolConnection) => {
    if (error) throw error;

    console.log(`Creating ${MAX_USERS} dummy users...`);
    await userSeeder(connection, faker, MAX_USERS);
    console.log(`Dummy users generated!`);

    connection.release();
  }
);
