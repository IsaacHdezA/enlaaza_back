import { UserRDP } from "./user";
import { userModel } from "./user.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";

const userControl = () => {};

userControl.getAllUsers = async (req: Request, res: Response) => {
  let users: UserRDP[] | null = [];

  users = await userModel.getAllUsers();
  users!.forEach(user => {
    user.fechaRegistro = utils.toISODate(new Date(user.fechaRegistro));
    user.fecNac = utils.toISODate(new Date(user.fecNac));

    user.idiomas = (user.idiomas as any as string).split(",");
    user.habilidadesBlandas = (user.habilidadesBlandas as any as string).split(",");
    user.habilidadesTecnicas = (user.habilidadesTecnicas as any as string).split(",");
  });

  res.send(users);
};

userControl.getUserById = async (req: Request, res: Response) => {
  let user: UserRDP | null = null;
  const id: number = req.params.id as any as number;

  user = await userModel.getUserById(id);

  if(user) {
    user.fechaRegistro = utils.toISODate(new Date(user.fechaRegistro));
    user.fecNac = utils.toISODate(new Date(user.fecNac));
    user.idiomas = (user.idiomas as any as string).split(",");
    user.habilidadesBlandas = (user.habilidadesBlandas as any as string).split(",");
    user.habilidadesTecnicas = (user.habilidadesTecnicas as any as string).split(",");
  }

  res.send(user);
}

export { userControl };
