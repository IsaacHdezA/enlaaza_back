CREATE DATABASE IF NOT EXISTS enlaaza_db;

USE enlaaza_db;

CREATE TABLE IF NOT EXISTS usuario(
  userId                    INT UNSIGNED AUTO_INCREMENT,
  fechaRegistro         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  nombre                VARCHAR(255) NOT NULL,
  apellidos             VARCHAR(255) NOT NULL,
  curp                  VARCHAR(18) NOT NULL UNIQUE,
  fecNac                DATE NOT NULL,
  edad                  TINYINT NOT NULL,
  genero                BIT(1) NOT NULL,
  correoElectronico     VARCHAR(255) NOT NULL,
  telefono              VARCHAR(255) NULL,
  municipio             VARCHAR(255) NOT NULL,
  calle                 VARCHAR(255) NULL,
  numero                INT NULL,
  colonia               VARCHAR(255) NULL,
  codigoPostal          INT NOT NULL,
  escolaridad           ENUM(
                              "Sin estudios",
                              "Sabe leer y escribir",
                              "Primaria",
                              "Secundaria",
                              "Bachillerato",
                              "Bachillerato Técnico",
                              "Técnico Superior Universitario",
                              "Licenciatura/Ingeniería",
                              "Posgrado",
                              "Maestría",
                              "Doctorado"
                            ) NOT NULL,
  plantel               VARCHAR(255) NULL,
  idiomas               TEXT NOT NULL,
  habilidadesBlandas    TEXT NOT NULL,
  habilidadesTecnicas   TEXT NOT NULL,
  actividadActual       VARCHAR(255) NULL,
  buscaEmpleo           BIT(1) NOT NULL,
  trabajando            BIT(1) NOT NULL,
  disponibilidadViaje   BIT(1) NOT NULL,
  disponibilidadRadicar BIT(1) NOT NULL,
  buscaOpcion1          VARCHAR(255) NULL,
  buscaOpcion2          VARCHAR(255) NULL,
  buscaOpcion3          VARCHAR(255) NULL,
  numeroSeguroSocial    VARCHAR(11),
  motivoRegistro        VARCHAR(255) NOT NULL,

  PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS empresa(
  empresaId          INT UNSIGNED AUTO_INCREMENT,

  fechaRegistro      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  verificada         BOOLEAN NOT NULL,
  motivoRegistro     VARCHAR(255) NOT NULL,
  logoEmpresa        VARCHAR(255),
  nombreComercial    VARCHAR(255) NOT NULL,
  razonSocial        VARCHAR(255) NOT NULL,
  rfc                VARCHAR( 13) NOT NULL UNIQUE,
  correoElectronico  VARCHAR(255) NOT NULL,
  telefono           VARCHAR(255) NOT NULL,
  descripcionEmpresa TEXT,
  municipio          VARCHAR(255) NOT NULL,
  calle              VARCHAR(255) NULL,
  numero             INT NULL,
  colonia            VARCHAR(255) NULL,
  codigoPostal       INT NOT NULL,
  paisOrigen         VARCHAR(255) NOT NULL,
  perfilesEmpresa    TEXT,
  sector             VARCHAR(255) NOT NULL,
  actividad          VARCHAR(255) NOT NULL,
  tamanoEmpresa      VARCHAR(255) NOT NULL,
  tipoEmpresa        VARCHAR(255) NOT NULL,
  tipoSucursal       VARCHAR(255) NOT NULL,

  PRIMARY KEY(empresaId)
);

CREATE TABLE IF NOT EXISTS vacante(
  vacanteId                INT UNSIGNED AUTO_INCREMENT,
  empresaId                INT UNSIGNED NOT NULL,

  nombreVacante            VARCHAR(255) NOT NULL,
  fechaRegistro            DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  vigencia                 DATETIME NOT NULL,
  descripcion              TEXT NOT NULL,
  causaVacante             VARCHAR(80) NOT NULL,
  salarioMin               DECIMAL(12, 2) NOT NULL,
  salarioMax               DECIMAL(12, 2) NOT NULL,
  diasLaborales            VARCHAR(20) NOT NULL,
  prestaciones             TEXT NOT NULL,
  estatus                  BIT(1) NOT NULL,
  edadMin                  TINYINT NOT NULL,
  edadMax                  TINYINT NOT NULL,
  horarioInicio            TIME NOT NULL,
  horarioFin               TIME NOT NULL,
  disponibilidadViaje      BIT(1) NOT NULL,
  disponibilidadRadicar    BIT(1) NOT NULL,

  vacanteMatriz            BIT(1) NOT NULL,
  calle                    VARCHAR(255) NOT NULL,
  numero                   TINYINT UNSIGNED NOT NULL,
  colonia                  VARCHAR(255) NOT NULL,
  telefonoEmpresa          VARCHAR(15) NOT NULL,
  contactoDirecto          VARCHAR(255) NOT NULL,
  emailContactoDirecto     VARCHAR(255) NOT NULL,
  telefonoContactoDirecto  VARCHAR(15) NOT NULL,
  discapacidadesAceptables TEXT NOT NULL,
  idiomas                  TEXT NOT NULL,
  habilidadesBlandas       TEXT NOT NULL,
  habilidadesTecnicas      TEXT NOT NULL,

  numPlazas                INT UNSIGNED NULL,
  postulaciones            INT UNSIGNED NOT NULL,
  calificacion             DECIMAL(2, 1) NOT NULL,

  escolaridad      ENUM(
                         "Sin estudios",
                         "Sabe leer y escribir",
                         "Primaria",
                         "Secundaria",
                         "Bachillerato",
                         "Bachillerato Técnico",
                         "Técnico Superior Universitario",
                         "Licenciatura/Ingeniería",
                         "Posgrado",
                         "Maestría",
                         "Doctorado"
                       ) NOT NULL,
  tipoEmpleo       ENUM(
                         "Por horas",
                         "Por tarea completada/destajo",
                         "Fines de semana",
                         "Turno nocturno",
                         "Medio tiempo (4 hrs)",
                         "Tiempo completo (8 hrs)",
                         "Turnos rotativos/Jornadas rotativas"
                       ) NOT NULL,
  tipoContrato     ENUM(
                         "Contrato por tiempo determinado",
                         "Contrato por tiempo indeterminado",
                         "Contrato para becario/practicante"
                       ) NOT NULL,
  modalidad        ENUM("Híbrida", "Presencial", "Virtual") NOT NULL,
  experiencia      ENUM(
                         "Sin experiencia laboral",
                         "Menos de 6 meses",
                         "6 meses - 1 año",
                         "1 año - 2 años",
                         "2 años - 3 años",
                         "3 años - 5 años",
                         "5 años - 7 años",
                         "7 años - 10 años",
                         "Más de 10 años"
                       ) NOT NULL,
  nivelPuesto      ENUM(
                         "Directivos",
                         "Mandos medios",
                         "Técnico especializado",
                         "Técnico",
                         "Operativo"
                       ) NOT NULL,
  tipoLicencia     ENUM(
                         "Motocicletas, motonetas o cuatrimotos",
                         "Vehículos de carga mayor a 10 toneladas",
                         "Vehículos de carga mayor a 3.5 toneladas y hasta 10 toneladas",
                         "Vehículos de particulares de hasta 3.5 toneladas",
                         "Vehículos de servicio de transporte público de pasajeros",
                         "Vehículos de servicio público"
                       ) NOT NULL,
  periodoPago      ENUM(
                         "Por tarea completada/destajo",
                         "Semanal",
                         "Decenal",
                         "Catorcenal",
                         "Quincenal",
                         "Mensual"
                       ) NOT NULL,
  tipoSueldo       ENUM("Neto", "Bruto") NOT NULL,
  generoPreferible ENUM("Femenino", "Masculino", "Indistinto") NOT NULL,

  PRIMARY KEY(vacanteId),

  CONSTRAINT fk_vacanteEmpresa
    FOREIGN KEY(empresaId) REFERENCES empresa(empresaId)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

