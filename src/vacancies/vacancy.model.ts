import { FieldPacket, Pool, QueryResult } from 'mysql2/promise';
import { connection } from '../config/connection';
import { Vacancy } from './vacancy';

const vacancyModel = () => {};

vacancyModel.getAllVacancies = async (): Promise<Vacancy[]> => {
  const db = connection.promise();

  const sql = `
    SELECT
          vacante.*,
          CONCAT(TIME_FORMAT(vacante.horarioInicio, "%h:%m") , " - ", TIME_FORMAT(vacante.horarioFin, "%h:%m")) as horario,
          empresa.nombreComercial as nombreEmpresa, empresa.rfc as rfcEmpresa,
          empresa.correoElectronico as emailEmpresa, empresa.sector as area
    FROM vacante INNER JOIN empresa ON vacante.empresaId = empresa.empresaId;
  `;

  let response: [QueryResult, FieldPacket[]];
  let vacancies: Vacancy[] = [];

  try {
    response = (await db.execute(sql));
    vacancies = response[0] as Vacancy[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return vacancies;
}

export { vacancyModel };
