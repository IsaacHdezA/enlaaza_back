import { connection } from '../config/connection';
import { Pager } from '../utilities/pager';
import { UserRDP } from './user';

const userModel = () => {};

userModel.getAllUsers = async (itemsPerPage: number = 10, page: number = 0): Promise<Pager<UserRDP>> => {
  const db = connection.promise();
  const offset: number = (page - 1) * itemsPerPage;

  let pager: Pager<UserRDP> = new Pager<UserRDP>(itemsPerPage, page);
  await pager.getPagerData(db, "usuario");

  const sql = `SELECT * FROM usuario ORDER BY usuario.userId ASC LIMIT ? OFFSET ?;`;

  try {
    const [response, ] = (await db.execute(sql, [itemsPerPage, offset].map(item => item.toString())));
    pager.data = response as UserRDP[];
  } catch(e) {
    console.log(`Error: ${e}`);
  }

  return pager;
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