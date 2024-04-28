import { User } from "../../src/user/user";
import { catalog } from "../utilities/catalog";
import utils from "../utilities/utils";

function createRandomUser(faker: any): User {
  type sex = 'female' | 'male' | undefined;
  const gender = faker.person.sex(),
        municipality = faker.location.city(),
        school = `Una escuela en ${municipality}`;

  return {
    fechaRegistro:         utils.toISODate(faker.date.recent()),
    motivoRegistro:        faker.lorem.words(1),
    registroCompleto:      faker.datatype.boolean(),
    nombre:                faker.person.firstName(gender as sex),
    apellidos:             faker.person.lastName(gender as sex),
    curp:                  faker.string.alphanumeric(18),
    fecNac:                utils.toISODate(faker.date.birthdate({ min: 18, mode: 'age' })),
    edad:                  parseInt(faker.string.numeric()),
    genero:                gender == "female" ? false : true,
    correoElectronico:     faker.internet.email(),
    telefono:              faker.phone.number(),
    municipio:             municipality,
    calle:                 faker.location.street(),
    numero:                utils.randomInt(1, 2000),
    colonia:               faker.location.secondaryAddress(),
    codigoPostal:          parseInt(faker.location.zipCode()),
    escolaridad:           faker.helpers.arrayElement(catalog.escolaridad),
    plantel:               school,
    idiomas:               utils.generateArray(utils.randomInt(0, 5), catalog.idiomas),
    habilidadesBlandas:    utils.generateArray(utils.randomInt(0, 5), catalog.habilidadesBlandas),
    habilidadesTecnicas:   utils.generateArray(utils.randomInt(0, 5), catalog.habilidadesTecnicas),
    actividadActual:       faker.lorem.words(1),
    buscaEmpleo:           faker.datatype.boolean(),
    trabajando:            faker.datatype.boolean(),
    disponibilidadViaje:   faker.datatype.boolean(),
    disponibilidadRadicar: faker.datatype.boolean(),
    buscaOpcion1:          faker.lorem.words(1),
    buscaOpcion2:          faker.lorem.words(1),
    buscaOpcion3:          faker.lorem.words(1),
    registroExpress:       faker.datatype.boolean(),
    numeroSeguroSocial:    faker.string.alphanumeric(11),
  };
};

export { createRandomUser };
