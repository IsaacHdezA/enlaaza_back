import { connection } from '../config/connection';
import { UserRDP } from './user';

const userModel = () => {};

userModel.getAllUsers = async (): Promise<UserRDP[] | null> => {
  const db = connection.promise();
  let users: UserRDP[] | null = [];

  const sql = `SELECT * FROM usuario;`;

  try {
    const [response, ] = (await db.execute(sql));
    users = response as UserRDP[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return users;
}

userModel.getUserById = async (id: number): Promise<UserRDP | null> => {
  const db = connection.promise();
  let user: UserRDP | null = null;

  const sql = `SELECT * FROM usuario WHERE userId = ?`;

  try {
    const [response, ] = (await db.execute(sql, [id]))
    if(Array.isArray(response)) user = response[0] as UserRDP;
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return user;
}

export { userModel };