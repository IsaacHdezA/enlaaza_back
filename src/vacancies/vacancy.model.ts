import { FieldPacket, Pool, QueryResult } from 'mysql2/promise';
import { connection } from '../config/connection';
import { Vacancy } from './vacancy';

const vacancyModel = () => {};

vacancyModel.getAllVacancies = async (): Promise<Vacancy[]> => {
  const db = connection.promise();

  let response: [QueryResult, FieldPacket[]];
  let vacancies: Vacancy[] = [];

  try {
    response = (await db.execute("SELECT * from vacante;"));
    vacancies = response[0] as Vacancy[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return vacancies;
}

export { vacancyModel };
