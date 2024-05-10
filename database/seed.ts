import { faker } from "@faker-js/faker/locale/es";
import { PoolConnection } from "mysql2";
import { connection } from "../src/config/connection";
import { userSeeder } from "./seeders/user.seeder";
import { vacancySeeder } from "./seeders/vacancy.seeder";
import { businessSeeder } from "./seeders/business.seeder";

const MAX_USERS: number = 1000;
const MAX_BUSINESSES: number = 50;
const MAX_VACANCIES: number = 10000;

connection.getConnection(
  async (error: Error | null, connection: PoolConnection) => {
    if (error) throw error;

    console.log(`Creating ${MAX_USERS} dummy users...`);
    await userSeeder(connection, faker, MAX_USERS);
    
    console.log(`Creating ${MAX_BUSINESSES} dummy businesses...`);
    businessSeeder(connection, faker, MAX_BUSINESSES).then(async (res) => {
      console.log(`Creating ${MAX_VACANCIES} dummy vacancies...`);
      await vacancySeeder(connection, faker, MAX_VACANCIES);
    });

    connection.release();
  }
);
