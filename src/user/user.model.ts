import { connection } from '../config/connection';
import { User } from './user';

const userModel = () => {};

userModel.getAllUsers = async (): Promise<User[] | null> => {
	const db = connection.promise();
	let users: User[] | null = [];

	const sql = `SELECT * FROM usuario;`;

	try {
		const [response, ] = (await db.execute(sql));
		users = response as User[];
	} catch(e) {
		console.log(`Error: ${e}`);
	}

	return users;
}

userModel.getUserById = async (id: number): Promise<User | null> => {
	const db = connection.promise();
	let user: User | null = null;

	const sql = `SELECT * FROM usuario WHERE userId = ?`;

	try {
		const [response, ] = (await db.execute(sql, [id]))
		user = response as any as User;
	} catch(e) {
		console.log(`Error: ${e}`);
	}

	return user;
}

export { userModel };