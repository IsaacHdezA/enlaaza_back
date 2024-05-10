import { Business } from "../../src/business/business";
import { catalog } from "../../src/utilities/catalog";
import utils from "../../src/utilities/utils";

function createRandomBusiness(faker: any): Business {
  return {
    fechaRegistro:      utils.toISODate(faker.date.recent()),
    verificada:         faker.datatype.boolean(),
    motivoRegistro:     faker.lorem.words(1),
    logoEmpresa:        "https://rb.gy/7afywi",
    nombreComercial:    faker.lorem.words(5),
    razonSocial:        faker.lorem.words(5),
    rfc:                faker.string.alphanumeric(13),
    correoElectronico:  faker.internet.email(),
    telefono:           faker.phone.number(),
    descripcionEmpresa: faker.lorem.paragraph(),
    municipio:          faker.location.city(),
    calle:              faker.location.street(),
    numero:             utils.randomInt(1, 2000),
    colonia:            faker.location.secondaryAddress(),
		codigoPostal:       parseInt(faker.location.zipCode()),
    paisOrigen:         faker.location.country(),
    perfilesEmpresa:    faker.lorem.words(1),
    sector:             faker.commerce.department(),
    actividad:          faker.commerce.productAdjective(),
    tamanoEmpresa:      faker.commerce.productAdjective(),
    tipoEmpresa:        faker.commerce.productAdjective(),
    tipoSucursal:       faker.commerce.productAdjective(),
  };
}

export { createRandomBusiness };
