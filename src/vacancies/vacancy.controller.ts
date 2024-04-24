import { Vacancy } from "./vacancy";
import { vacancyModel } from "./vacancy.model";
import { Request, Response } from "express";

const vacancyControl = () => {};

vacancyControl.getAllVacancies = async (req: Request, res: Response) => {
  let vacancies: Vacancy[] = [];

  vacancies = await vacancyModel.getAllVacancies();

  res.send(vacancies);
};

export { vacancyControl };
