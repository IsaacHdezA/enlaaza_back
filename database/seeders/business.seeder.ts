import { PoolConnection } from "mysql2";
import { Business } from "../../src/business/business";
import { createRandomBusiness } from "../factories/business.factory";

const businessSeeder = async (db: PoolConnection, faker: any, maxBusinesses: number) => {
  let sql = `INSERT INTO empresa (
    fechaRegistro,
    verificada,
    motivoRegistro,
    logoEmpresa,
    nombreComercial,
    razonSocial,
    rfc,
    correoElectronico,
    telefono,
    descripcionEmpresa,
    municipio,
    calle,
    numero,
    colonia,
		codigoPostal,
    paisOrigen,
    perfilesEmpresa,
    sector,
    actividad,
    tamanoEmpresa,
    tipoEmpresa,
    tipoSucursal
  ) VALUES `;

  let business: Business;

  for(let i = 0; i < maxBusinesses; i++) {
    business = createRandomBusiness(faker);
    sql += `(
      "${business.fechaRegistro}",
      ${business.verificada ? 1 : 0},
      "${business.motivoRegistro}",
      "${business.logoEmpresa}",
      "${business.nombreComercial}",
      "${business.razonSocial}",
      "${business.rfc}",
      "${business.correoElectronico}",
      "${business.telefono}",
      "${business.descripcionEmpresa}",
      "${business.municipio}",
      "${business.calle}",
      "${business.numero}",
      "${business.colonia}",
      ${business.codigoPostal},
      "${business.paisOrigen}",
      "${business.perfilesEmpresa}",
      "${business.sector}",
      "${business.actividad}",
      "${business.tamanoEmpresa}",
      "${business.tipoEmpresa}",
      "${business.tipoSucursal}"
    ),`;
  }

  sql = sql.slice(0, sql.length - 1);

  await db.execute(sql, (error) => {
    if(error) console.log("Error in business.seeder: " + error);
    else console.log("Succesfully created dummy data for businesses");
  });
}

export { businessSeeder };