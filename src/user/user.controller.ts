import { User } from "./user";
import { userModel } from "./user.model";
import { Request, Response }  from "express";

const userControl = () => {};

userControl.getAllUsers = async (req: Request, res: Response) => {
	let users: User[] = [];

  const toISODate = (date: Date) => date.toISOString().slice(0, 19).replace("T", " ");

	users = await userModel.getAllUsers();
	users.forEach(user => {
		user.fechaRegistro = toISODate(new Date(user.fechaRegistro));
		user.fecNac = toISODate(new Date(user.fecNac));

		// @ts-ignore
		user.idiomas = user.idiomas.split(",");

		// @ts-ignore
		user.habilidadesBlandas = user.habilidadesBlandas.split(",");

		// @ts-ignore
		user.habilidadesTecnicas = user.habilidadesTecnicas.split(",");
	});

	res.send(users);
};

export { userControl };