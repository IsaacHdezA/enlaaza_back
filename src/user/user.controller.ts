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

	user = (await userModel.getUserById(id));

	if(Array.isArray(user) && user.length > 0) {
		user[0].fechaRegistro = utils.toISODate(new Date(user[0].fechaRegistro));
		user[0].fecNac = utils.toISODate(new Date(user[0].fecNac));
		user[0].idiomas = user[0].idiomas.split(",");
		user[0].habilidadesBlandas = user[0].habilidadesBlandas.split(",");
		user[0].habilidadesTecnicas = user[0].habilidadesTecnicas.split(",");

		res.send(user[0]);

		return;
	}

	res.send(null);
}

export { userControl };
