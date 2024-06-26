import type { PoolConnection } from "mysql2";
import { Vacancy } from "../../src/vacancies/vacancy"; 
import { createRandomVacancy } from "../factories/vacancy.factory";
import { businessModel } from "../../src/business/business.model";

const vacancySeeder = async (db: PoolConnection, faker: any, maxVacancies: number) => {
    console.log(`Creating ${maxVacancies} dummy vacancies...`);
	let sql = `INSERT INTO enlaaza_db.vacante(
			empresaId,
      fechaRegistro,
      vigencia,
      vacanteMatriz,
      calle,
      numero,
      colonia,
      escolaridad,
      estatus,
      nombreVacante,
      tipoEmpleo,
      tipoContrato,
      modalidad,
      diasLaborales,
      horarioInicio,
      horarioFin,
      nivelPuesto,
      prestaciones,
      discapacidadesAceptables,
      edadMin,
      edadMax,
      experiencia,
      idiomas,
      habilidadesBlandas,
      habilidadesTecnicas,
      disponibilidadViaje,
      disponibilidadRadicar,
      tipoLicencia,
      postulaciones,
      telefonoEmpresa,
      contactoDirecto,
      emailContactoDirecto,
      telefonoContactoDirecto,
      descripcion,
      causaVacante,
      numPlazas,
      salarioMin,
      salarioMax,
      periodoPago,
      tipoSueldo,
      generoPreferible,
      calificacion
		) VALUES `;
  const businessIds: number[] | null = await businessModel.getBusinessIds();

	let vacancy: Vacancy;
	for (let i = 0; i < maxVacancies; i++) {
		vacancy = createRandomVacancy(faker, businessIds);
		sql += `(
			${vacancy.empresaId},
      "${vacancy.fechaRegistro}",
      "${vacancy.vigencia}",
      ${vacancy.vacanteMatriz ? 1 : 0},
      "${vacancy.calle}",
      "${vacancy.numero}",
      "${vacancy.colonia}",
      "${vacancy.escolaridad}",
      ${vacancy.estatus ? 1 : 0},
      "${vacancy.nombreVacante}",
      "${vacancy.tipoEmpleo}",
      "${vacancy.tipoContrato}",
      "${vacancy.modalidad}",
      "${vacancy.diasLaborales.join(',')}",
      "${vacancy.horario}",
      "${vacancy.horario}",
      "${vacancy.nivelPuesto}",
      "${vacancy.prestaciones.join(',')}",
      "${vacancy.discapacidadesAceptables.join(',')}",
      ${vacancy.edadMin},
      ${vacancy.edadMax},
      "${vacancy.experiencia}",
      "${vacancy.idiomas.join(',')}",
      "${vacancy.habilidadesBlandas.join(',')}",
      "${vacancy.habilidadesTecnicas.join(',')}",
      ${vacancy.disponibilidadViaje ? 1 : 0},
      ${vacancy.disponibilidadRadicar ? 1 : 0},
      "${vacancy.tipoLicencia}",
      ${vacancy.postulaciones},
      "${vacancy.telefonoEmpresa}",
      "${vacancy.contactoDirecto}",
      "${vacancy.emailContactoDirecto}",
      "${vacancy.telefonoContactoDirecto}",
      "${vacancy.descripcion}",
      "${vacancy.causaVacante}",
      ${vacancy.numPlazas},
      "${vacancy.salarioMin}",
      "${vacancy.salarioMax}",
      "${vacancy.periodoPago}",
      "${vacancy.tipoSueldo}",
      "${vacancy.generoPreferible}",
      ${vacancy.calificacion}),`;
	}
	sql = sql.slice(0, sql.length - 1);

      return new Promise<boolean>((resolve) => {
            db.execute(sql, (error) => {
                  if (error) console.log("Error in vacancy.seeder: " + error);
                  else console.log("Successfully created dummy data for vacancies");
                  resolve(true)
            });
      })
};

export { vacancySeeder };
