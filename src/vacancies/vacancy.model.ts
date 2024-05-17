import { connection } from '../config/connection';
import { Pager } from '../utilities/pager';
import { VacancyRDP } from './vacancy';

const vacancyModel = () => {};

vacancyModel.getAllVacancies = async (itemsPerPage: number = 10, page: number = 0): Promise<Pager<VacancyRDP>> => {
  const db = connection.promise();
  const offset: number = (page - 1) * itemsPerPage;

  let pager: Pager<VacancyRDP> = new Pager<VacancyRDP>(itemsPerPage, page);
  await pager.getPagerData(db, "vacante");

  const sql = `
    SELECT
          vacante.*,
          CONCAT(TIME_FORMAT(vacante.horarioInicio, "%h:%m") , " - ", TIME_FORMAT(vacante.horarioFin, "%h:%m")) as horario,
          empresa.nombreComercial as nombreEmpresa, empresa.rfc as rfcEmpresa,
          empresa.correoElectronico as emailEmpresa, empresa.sector as area
    FROM vacante INNER JOIN empresa ON vacante.empresaId = empresa.empresaId
    ORDER BY vacante.vacanteId ASC LIMIT ? OFFSET ?;
  `;

  try {
    const [response, ] = await db.execute(sql, [itemsPerPage, offset].map(item => item.toString()));
    pager.data = response as VacancyRDP[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return pager;
}

vacancyModel.getVacancyById = async (id: number): Promise<VacancyRDP | null> => {
  const db = connection.promise();
  let vacancy: VacancyRDP | null = null;

  const sql = `SELECT * FROM vacante WHERE vacanteId = ?`;

  try {
    const [response, ] = (await db.execute(sql, [id]));
    if(Array.isArray(response)) vacancy = response[0] as any as VacancyRDP;
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return vacancy;
}

export { vacancyModel };
