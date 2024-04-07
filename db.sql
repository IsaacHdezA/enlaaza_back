CREATE DATABASE IF NOT EXISTS enlaaza_db;

USE enlaaza_db;

CREATE TABLE IF NOT EXISTS usuario(
  userId                    INT UNSIGNED AUTO_INCREMENT,
  usr_fechaRegistro         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  usr_nombre                VARCHAR(50) NOT NULL,
  usr_apellidos             VARCHAR(50) NOT NULL,
  usr_curp                  VARCHAR(18) NOT NULL UNIQUE,
  usr_fecNac                DATE NOT NULL,
  usr_edad                  TINYINT NOT NULL,
  usr_genero                BIT(1) NOT NULL,
  usr_correoElectronico     VARCHAR(50) NOT NULL,
  usr_telefono              VARCHAR(50) NULL,
  usr_municipio             VARCHAR(50) NOT NULL,
  usr_calle                 VARCHAR(50) NULL,
  usr_numero                INT NULL,
  usr_colonia               VARCHAR(50) NULL,
  usr_codigoPostal          INT NOT NULL,
  usr_escolaridad           ENUM(
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
  usr_plantel               VARCHAR(50) NULL,
  usr_idiomas               TEXT NOT NULL,
  usr_habilidadesBlandas    TEXT NOT NULL,
  usr_habilidadesTecnicas   TEXT NOT NULL,
  usr_actividadActual       VARCHAR(50) NULL,
  usr_buscaEmpleo           BIT(1) NOT NULL,
  usr_trabajando            BIT(1) NOT NULL,
  usr_disponibilidadViaje   BIT(1) NOT NULL,
  usr_disponibilidadRadicar BIT(1) NOT NULL,
  usr_buscaOpcion1          VARCHAR(50) NULL,
  usr_buscaOpcion2          VARCHAR(50) NULL,
  usr_buscaOpcion3          VARCHAR(50) NULL,
  usr_numeroSeguroSocial    VARCHAR(11),
  usr_motivoRegistro        VARCHAR(50) NOT NULL,

  PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS empresa(
  empresaId          INT UNSIGNED AUTO_INCREMENT,

  emp_fechaRegistro      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  emp_verificada         BOOLEAN NOT NULL,
  emp_motivoRegistro     VARCHAR(255) NOT NULL,
  emp_logoEmpresa        VARCHAR(255),
  emp_nombreComercial    VARCHAR(255) NOT NULL,
  emp_razonSocial        VARCHAR(255) NOT NULL,
  emp_rfc                VARCHAR( 13) NOT NULL UNIQUE,
  emp_correoElectronico  VARCHAR(255) NOT NULL,
  emp_telefono           VARCHAR(255) NOT NULL,
  emp_descripcionEmpresa TEXT,
  emp_municipio          VARCHAR(50) NOT NULL,
  emp_calle              VARCHAR(50) NULL,
  emp_numero             INT NULL,
  emp_colonia            VARCHAR(50) NULL,
  emp_codigoPostal       INT NOT NULL,
  emp_paisOrigen         VARCHAR(255) NOT NULL,
  emp_perfilesEmpresa    TEXT,
  emp_sector             VARCHAR(255) NOT NULL,
  emp_actividad          VARCHAR(255) NOT NULL,
  emp_tamanoEmpresa      VARCHAR(255) NOT NULL,
  emp_tipoEmpresa        VARCHAR(255) NOT NULL,
  emp_tipoSucursal       VARCHAR(255) NOT NULL,

  PRIMARY KEY(empresaId)
);

CREATE TABLE IF NOT EXISTS vacante(
  vacanteId                INT UNSIGNED AUTO_INCREMENT,
  empresaId                INT UNSIGNED NOT NULL,

  vac_nombreVacante            VARCHAR(50) NOT NULL,
  vac_fechaRegistro            DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  vac_vigencia                 DATETIME NOT NULL,
  vac_descripcion              TEXT NOT NULL,
  vac_causaVacante             VARCHAR(80) NOT NULL,
  vac_salarioMin               DECIMAL(12, 2) NOT NULL,
  vac_salarioMax               DECIMAL(12, 2) NOT NULL,
  vac_diasLaborales            VARCHAR(20) NOT NULL,
  vac_prestaciones             TEXT NOT NULL,
  vac_estatus                  BIT(1) NOT NULL,
  vac_edadMin                  TINYINT NOT NULL,
  vac_edadMax                  TINYINT NOT NULL,
  vac_horarioInicio            TIME NOT NULL,
  vac_horarioFin               TIME NOT NULL,
  vac_disponibilidadViaje      BIT(1) NOT NULL,
  vac_disponibilidadRadicar    BIT(1) NOT NULL,

  vac_vacanteMatriz            BIT(1) NOT NULL,
  vac_calle                    VARCHAR(50) NOT NULL,
  vac_numero                   TINYINT UNSIGNED NOT NULL,
  vac_colonia                  VARCHAR(50) NOT NULL,
  vac_telefonoEmpresa          VARCHAR(15) NOT NULL,
  vac_contactoDirecto          VARCHAR(50) NOT NULL,
  vac_emailContactoDirecto     VARCHAR(50) NOT NULL,
  vac_telefonoContactoDirecto  VARCHAR(15) NOT NULL,
  vac_discapacidadesAceptables TEXT NOT NULL,
  vac_idiomas                  TEXT NOT NULL,
  vac_habilidadesBlandas       TEXT NOT NULL,
  vac_habilidadesTecnicas      TEXT NOT NULL,

  vac_numPlazas                INT UNSIGNED NULL,
  vac_postulaciones            INT UNSIGNED NOT NULL,
  vac_calificacion             DECIMAL(2, 1) NOT NULL,

  vac_escolaridad      ENUM(
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
  vac_tipoEmpleo       ENUM(
                         "Por horas",
                         "Por tarea completada/destajo",
                         "Fines de semana",
                         "Turno nocturno",
                         "Medio tiempo (4 hrs)",
                         "Tiempo completo (8 hrs)",
                         "Turnos rotativos/Jornadas rotativas"
                       ) NOT NULL,
  vac_tipoContrato     ENUM(
                         "Contrato por tiempo determinado",
                         "Contrato por tiempo indeterminado",
                         "Contrato para becario/practicante"
                       ) NOT NULL,
  vac_modalidad        ENUM("Híbrida", "Presencial", "Virtual") NOT NULL,
  vac_experiencia      ENUM(
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
  vac_nivelPuesto      ENUM(
                         "Directivos",
                         "Mandos medios",
                         "Técnico especializado",
                         "Técnico",
                         "Operativo"
                       ) NOT NULL,
  vac_tipoLicencia     ENUM(
                         "Motocicletas, motonetas o cuatrimotos",
                         "Vehículos de carga mayor a 10 toneladas",
                         "Vehículos de carga mayor a 3.5 toneladas y hasta 10 toneladas",
                         "Vehículos de particulares de hasta 3.5 toneladas",
                         "Vehículos de servicio de transporte público de pasajeros",
                         "Vehículos de servicio público"
                       ) NOT NULL,
  vac_periodoPago      ENUM(
                         "Por tarea completada/destajo",
                         "Semanal",
                         "Decenal",
                         "Catorcenal",
                         "Quincenal",
                         "Mensual"
                       ) NOT NULL,
  vac_tipoSueldo       ENUM("Neto", "Bruto") NOT NULL,
  vac_generoPreferible ENUM("Femenino", "Masculino", "Indistinto") NOT NULL,

  PRIMARY KEY(vacanteId),

  CONSTRAINT fk_vacanteEmpresa
    FOREIGN KEY(empresaId) REFERENCES empresa(empresaId)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

