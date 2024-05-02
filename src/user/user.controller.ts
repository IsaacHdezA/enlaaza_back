import { User } from "./user";
import { userModel } from "./user.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";

const userControl = () => {};

userControl.getAllUsers = async (req: Request, res: Response) => {
	let users: User[] = [];

	users = await userModel.getAllUsers();
	users.forEach(user => {
		user.fechaRegistro = utils.toISODate(new Date(user.fechaRegistro));
		user.fecNac = utils.toISODate(new Date(user.fecNac));

		// @ts-ignore
		user.idiomas = user.idiomas.split(",");

		// @ts-ignore
		user.habilidadesBlandas = user.habilidadesBlandas.split(",");

		// @ts-ignore
		user.habilidadesTecnicas = user.habilidadesTecnicas.split(",");
	});

	res.send(users);
};

userControl.getUserById = async (req: Request, res: Response) => {
	let user: User | null;
	const id: number = req.params.id as any as number;

	user = (await userModel.getUserById(id)) as User;

	res.send(user);
}

export { userControl };
