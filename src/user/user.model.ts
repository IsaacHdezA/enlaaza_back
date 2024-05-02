import { FieldPacket, Pool, QueryResult } from 'mysql2/promise';
import { connection } from '../config/connection';
import { User } from './user';

const userModel = () => {};

userModel.getAllUsers = async (): Promise<User[]> => {
	const db = connection.promise();
	let users: User[] = [];

	try {
		const [response,] = (await db.execute("SELECT * FROM usuario;"));
		users = response as User[];
	} catch(e) {
		console.log(`Error: ${e}`);
	}

	return users;
}

userModel.getUserById = async (id: number): Promise<User | null> => {
	const db = connection.promise();
	let user: User | null = null;

	try {
		const [response, ] = (await db.execute(`SELECT * FROM usuario WHERE userId = ?`, [id]))
		user = response as any as User;
	} catch(e) {
		console.log(`Error: ${e}`);
	}

	return user;
}

export { userModel };