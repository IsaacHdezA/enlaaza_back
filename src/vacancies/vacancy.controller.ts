import { VacancyRDP } from "./vacancy";
import { vacancyModel } from "./vacancy.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";
import { Pager } from "../utilities/pager";

const vacancyControl = () => {};

vacancyControl.getAllVacancies = async (req: Request, res: Response) => {
  const itemsPerPage = parseInt(req.params.perPage);
  const page = parseInt(req.params.page) <= 1 ? 1 : parseInt(req.params.page);

  let pager: Pager<VacancyRDP> = await vacancyModel.getAllVacancies(itemsPerPage, page);

  pager.data!.forEach(vacancy => {
    vacancy.fechaRegistro = utils.toISODate(new Date(vacancy.fechaRegistro));
    vacancy.vigencia = utils.toISODate(new Date(vacancy.vigencia));

    vacancy.idiomas = (vacancy.idiomas as any as string).split(",");
    vacancy.habilidadesBlandas = (vacancy.habilidadesBlandas as any as string).split(",");
    vacancy.habilidadesTecnicas = (vacancy.habilidadesTecnicas as any as string).split(",");
    vacancy.prestaciones = (vacancy.prestaciones as any as string).split(",");
  });

  res.send(pager);
};

vacancyControl.getVacancyById = async (req: Request, res: Response) => {
  let vacancy: VacancyRDP | null = null;
  const id: number = req.params.id as any as number;

  vacancy = await vacancyModel.getVacancyById(id);

  if(vacancy) {
    vacancy.fechaRegistro = utils.toISODate(new Date(vacancy.fechaRegistro));
    vacancy.vigencia = utils.toISODate(new Date(vacancy.vigencia));
    vacancy.idiomas = (vacancy.idiomas as any as string).split(",");
    vacancy.habilidadesBlandas = (vacancy.habilidadesBlandas as any as string).split(",");
    vacancy.habilidadesTecnicas = (vacancy.habilidadesTecnicas as any as string).split(",");
    vacancy.prestaciones = (vacancy.prestaciones as any as string).split(",");
  }

  res.send(vacancy);
};

export { vacancyControl };
