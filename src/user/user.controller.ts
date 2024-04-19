import { User } from "./user";
import { userModel } from "./user.model";
import { Request, Response }  from "express";

const userControl = () => {};

userControl.getAllUsers = async (req: Request, res: Response) => {
	let users: User[] = [];

	users = await userModel.getAllUsers();
	res.json({
		users: users
	});
};

export { userControl };