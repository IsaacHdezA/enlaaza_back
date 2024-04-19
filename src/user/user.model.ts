import { FieldPacket, Pool, QueryResult } from 'mysql2/promise';
import { connection } from '../config/connection';
import { User } from './user';

const userModel = () => {};

userModel.getAllUsers = async (): Promise<User[]> => {
	const db = connection.promise();
	let response: [QueryResult, FieldPacket[]];
	let users: User[] = [];

	try {
		response = (await db.execute("SELECT * FROM usuario;"));
		users = response[0] as User[];

	} catch(e) {
		console.log('Chingas a tu puta madre');
	}

	return users;
}

export { userModel };