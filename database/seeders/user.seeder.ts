import { createRandomUser } from "../factories/user.factory";

const userSeeder = async (db, faker, maxUsers) => {
  sql = `
    INSERT INTO enlaaza_db.usuario(
      usr_fechaRegistro, usr_nombre, usr_apellidos, usr_curp, usr_fecNac,
      usr_edad, usr_genero, usr_correoElectronico, usr_telefono,
      usr_municipio, usr_calle, usr_numero, usr_colonia, usr_codigoPostal,
      usr_escolaridad, usr_plantel, usr_idiomas, usr_habilidadesBlandas,
      usr_habilidadesTecnicas, usr_actividadActual, usr_buscaEmpleo,
      usr_trabajando, usr_disponibilidadViaje, usr_disponibilidadRadicar,
      usr_buscaOpcion1, usr_buscaOpcion2, usr_buscaOpcion3,
      usr_numeroSeguroSocial, usr_motivoRegistro,
    ) VALUES `;

    let user;

    for(let i = 0; i < maxUsers; i++) {
      user = createRandomUser(faker);
      sql += `(
                "${ user.fechaRegistro }",
                "${ user.nombre }",
                "${ user.apellidos }",
                "${ user.curp }",
                "${ user.fecNac }",
                "${ user.edad }",
                "${ user.genero }",
                "${ user.telefono }",
                "${ user.correoElectronico }",
                "${ user.municipio }",
                "${ user.calle }",
                "${ user.numero }",
                "${ user.colonia }",
                "${ user.codigoPostal }",
                "${ user.escolaridad }",
                "${ user.plantel }",
                "${ user.idiomas }",
                "${ user.habilidadesBlandas }",
                "${ user.habilidadesTecnicas }",
                "${ user.actividadActual }",
                "${ user.buscaEmpleo }",
                "${ user.trabajando }",
                "${ user.disponibilidadViaje }",
                "${ user.disponibilidadRadicar }",
                "${ user.buscaOpcion1 }",
                "${ user.buscaOpcion2 }",
                "${ user.buscaOpcion3 }",
                "${ user.numeroSeguroSocial }",
                "${ user.motivoRegistro }"
      )`;
    }
    sql = sql.slice(0, sql.length - 1);

    await db.execute(sql, (erro) => {
      if(error) console.log("Error in user.seeder: " + error);
      else console.log("Succesfully created dummy data for users");
    });
};

module.exports = userSeeder;
