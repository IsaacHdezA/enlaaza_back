import { Vacancy } from "./vacancy";
import { vacancyModel } from "./vacancy.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";

const vacancyControl = () => {};

vacancyControl.getAllVacancies = async (req: Request, res: Response) => {
  let vacancies: Vacancy[] = [];

  vacancies = await vacancyModel.getAllVacancies();
	vacancies.forEach(vacancy => {
		vacancy.fechaRegistro = utils.toISODate(new Date(vacancy.fechaRegistro));
		vacancy.vigencia = utils.toISODate(new Date(vacancy.vigencia));

		// @ts-ignore
		vacancy.idiomas = vacancy.idiomas.split(",");

		// @ts-ignore
		vacancy.habilidadesBlandas = vacancy.habilidadesBlandas.split(",");

		// @ts-ignore
		vacancy.habilidadesTecnicas = vacancy.habilidadesTecnicas.split(",");

		// @ts-ignore
		vacancy.prestaciones = vacancy.prestaciones.split(",");
	});

  res.send(vacancies);
};

export { vacancyControl };
