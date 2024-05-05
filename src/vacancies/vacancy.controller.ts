import { Vacancy } from "./vacancy";
import { vacancyModel } from "./vacancy.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";

const vacancyControl = () => {};

vacancyControl.getAllVacancies = async (req: Request, res: Response) => {
	let vacancies: Vacancy[] | null = [];

	vacancies = await vacancyModel.getAllVacancies();
	if(vacancies) {
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
	}

	res.send(vacancies);
};

vacancyControl.getVacancyById = async (req: Request, res: Response) => {
	let vacancy: Vacancy | null = null;
	const id: number = req.params.id as any as number;

	vacancy = await vacancyModel.getVacancyById(id);

	if(Array.isArray(vacancy) && vacancy.length > 0) {
		vacancy[0].fechaRegistro = utils.toISODate(new Date(vacancy[0].fechaRegistro));
		vacancy[0].vigencia = utils.toISODate(new Date(vacancy[0].vigencia));
		vacancy[0].idiomas = vacancy[0].idiomas.split(",");
		vacancy[0].habilidadesBlandas = vacancy[0].habilidadesBlandas.split(",");
		vacancy[0].habilidadesTecnicas = vacancy[0].habilidadesTecnicas.split(",");
		vacancy[0].prestaciones = vacancy[0].prestaciones.split(",");

		res.send(vacancy[0]);

		return;
	}

	res.send(null);
};

export { vacancyControl };
