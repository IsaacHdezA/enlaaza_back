import { PoolConnection } from "mysql2";
import { User } from "../../src/user/user";
import { createRandomUser } from "../factories/user.factory";

const userSeeder = async (db: PoolConnection, faker: any, maxUsers: number) => {
  console.log(`Creating ${maxUsers} dummy users...`);

  let sql = `
    INSERT INTO enlaaza_db.usuario(
      fechaRegistro,
      nombre,
      apellidos,
      curp,
      fecNac,
      edad,
      genero,
      correoElectronico,
      telefono,
      municipio,
      calle,
      numero,
      colonia,
      codigoPostal,
      escolaridad,
      plantel,
      idiomas,
      habilidadesBlandas,
      habilidadesTecnicas,
      actividadActual,
      buscaEmpleo,
      trabajando,
      disponibilidadViaje,
      disponibilidadRadicar,
      buscaOpcion1,
      buscaOpcion2,
      buscaOpcion3,
      numeroSeguroSocial,
      motivoRegistro
    ) VALUES `;

  let user: User;

  for (let i = 0; i < maxUsers; i++) {
    user = createRandomUser(faker);
    sql += `(
                "${user.fechaRegistro}",
                "${user.nombre}",
                "${user.apellidos}",
                "${user.curp}",
                "${user.fecNac}",
                "${user.edad}",
                ${user.genero ? 1 : 0},
                "${user.correoElectronico}",
                "${user.telefono}",
                "${user.municipio}",
                "${user.calle}",
                "${user.numero}",
                "${user.colonia}",
                "${user.codigoPostal}",
                "${user.escolaridad}",
                "${user.plantel}",
                "${user.idiomas}",
                "${user.habilidadesBlandas}",
                "${user.habilidadesTecnicas}",
                "${user.actividadActual}",
                ${user.buscaEmpleo ? 1 : 0},
                ${user.trabajando ? 1 : 0},
                ${user.disponibilidadViaje ? 1 : 0},
                ${user.disponibilidadRadicar ? 1 : 0},
                "${user.buscaOpcion1}",
                "${user.buscaOpcion2}",
                "${user.buscaOpcion3}",
                "${user.numeroSeguroSocial}",
                "${user.motivoRegistro}"
      ),`;
  }
  sql = sql.slice(0, sql.length - 1);

  return new Promise<boolean>((resolve) => {
    db.execute(sql, (error) => {
      if (error) console.log("Error in user.seeder: " + error);
      else console.log("Succesfully created dummy data for users");
      resolve(true)
    });
  })
};

export { userSeeder };
