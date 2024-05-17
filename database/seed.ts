import { faker } from "@faker-js/faker/locale/es";
import { PoolConnection } from "mysql2";
import { connection } from "../src/config/connection";
import { userSeeder } from "./seeders/user.seeder";
import { vacancySeeder } from "./seeders/vacancy.seeder";
import { businessSeeder } from "./seeders/business.seeder";

const MAX_USERS: number = 1000;
const MAX_BUSINESSES: number = 50;
const MAX_VACANCIES: number = 10000;

(async() => {
  return new Promise<boolean>((resolve) => {
    connection.getConnection(
      async (error: Error | null, conn: PoolConnection) => {
        if (error) throw error;
        await userSeeder(conn, faker, MAX_USERS);
        await businessSeeder(conn, faker, MAX_BUSINESSES);
        await vacancySeeder(conn, faker, MAX_VACANCIES);
        conn.release()
        resolve(true)
      }
    );
  })
})().then(() => {
  console.log('Records saved successfully!!');
  connection.end();
});
