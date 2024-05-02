import { Vacancy } from "../../src/vacancies/vacancy";
import { catalog } from "../../src/utilities/catalog";
import utils from "../../src/utilities/utils";

function createRandomVacancy(faker: any): Vacancy {
  return {
    fechaRegistro:            utils.toISODate(faker.date.recent()),
    vigencia:                 utils.toISODate(faker.date.recent()),
    nombreEmpresa:            faker.lorem.words(5),
    rfcEmpresa:               faker.string.alphanumeric(13),
    emailEmpresa:             faker.internet.email(),
    vacanteMatriz:            faker.lorem.words(3),
    municipio:                faker.location.city(),
    calle:                    faker.location.street(),
    numero:                   utils.randomInt(1, 255).toString(),
    colonia:                  faker.location.secondaryAddress(),
    escolaridad:              faker.helpers.arrayElement(catalog.escolaridad),
    estatus:                  faker.helpers.arrayElement(['Abierta', 'Cerrada']),
    nombreVacante:            faker.lorem.words(2),
    area:                     faker.lorem.words(5),
    tipoEmpleo:               faker.helpers.arrayElement(catalog.tipoEmpleo),
    tipoContrato:             faker.helpers.arrayElement(catalog.tipoContrato),
    modalidad:                faker.helpers.arrayElement(catalog.modalidad),
    diasLaborales:            utils.generateArray(utils.randomInt(0, 5), ["1", "2", "3", "4", "5", "6", "7"]),
    horario:                  faker.helpers.arrayElement(catalog.horario),
    nivelPuesto:              faker.helpers.arrayElement(catalog.nivelPuesto),
    prestaciones:             utils.generateArray(utils.randomInt(0, 5), catalog.prestaciones),
    discapacidadesAceptables: utils.generateArray(utils.randomInt(0, 5), catalog.discapacidades),
    edadMin:                  parseInt(faker.string.numeric()),
    edadMax:                  parseInt(faker.string.numeric()),
    experiencia:              faker.helpers.arrayElement(catalog.experienciaLaboral),
    idiomas:                  utils.generateArray(utils.randomInt(0, 5), catalog.idiomas),
    habilidadesBlandas:       utils.generateArray(utils.randomInt(0, 5), catalog.habilidadesBlandas),
    habilidadesTecnicas:      utils.generateArray(utils.randomInt(0, 5), catalog.habilidadesTecnicas),
    disponibilidadViaje:      faker.datatype.boolean(),
    disponibilidadRadicar:    faker.datatype.boolean(),
    tipoLicencia:             faker.helpers.arrayElement(catalog.tipoLicencia),
    postulaciones:            utils.randomInt(0, 100),
    telefonoEmpresa:          faker.phone.number(),
    contactoDirecto:          faker.person.firstName() + " " + faker.person.lastName(),
    emailContactoDirecto:     faker.internet.email(),
    telefonoContactoDirecto:  faker.phone.number(),
    descripcion:              faker.lorem.paragraph(),
    causaVacante:             faker.lorem.words(5),
    numPlazas:                utils.randomInt(0, 100),
    salarioMin:               faker.finance.amount({ min: 1000, max: 5000,  dec: 2 }),
    salarioMax:               faker.finance.amount({ min: 5000, max: 10000, dec: 2 }),
    periodoPago:              faker.helpers.arrayElement(catalog.periodoPago),
    tipoSueldo:               faker.helpers.arrayElement(catalog.tipoSueldo),
    generoPreferible:         faker.helpers.arrayElement(catalog.genero),
    calificacion:             utils.randomInt(1, 5)
 };
}

export { createRandomVacancy };