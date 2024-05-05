import { connection } from '../config/connection';
import { Vacancy } from './vacancy';

const vacancyModel = () => {};

vacancyModel.getAllVacancies = async (): Promise<Vacancy[] | null> => {
  const db = connection.promise();

  const sql = `
    SELECT
          vacante.*,
          CONCAT(TIME_FORMAT(vacante.horarioInicio, "%h:%m") , " - ", TIME_FORMAT(vacante.horarioFin, "%h:%m")) as horario,
          empresa.nombreComercial as nombreEmpresa, empresa.rfc as rfcEmpresa,
          empresa.correoElectronico as emailEmpresa, empresa.sector as area
    FROM vacante INNER JOIN empresa ON vacante.empresaId = empresa.empresaId;
  `;

  let vacancies: Vacancy[] | null = [];

  try {
    const [response, ] = (await db.execute(sql));
    vacancies = response as Vacancy[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return vacancies;
}

vacancyModel.getVacancyById = async (id: number): Promise<Vacancy | null> => {
  const db = connection.promise();
  let vacancy: Vacancy | null = null;

  const sql = `SELECT * FROM vacante WHERE vacanteId = ?`;

  try {
    const [response, ] = (await db.execute(sql, [id]));
    vacancy = response as any as Vacancy;
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return vacancy;
}

export { vacancyModel };
