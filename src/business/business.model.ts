import { connection } from "../config/connection";
import { Business } from "./business";

const businessModel = () => {};

businessModel.getAllBusinesses = async (): Promise<Business[] | null> => {
	const db = connection.promise();
	let businesses: Business[] | null = [];

	const sql = `SELECT * FROM empresa;`;

	try {
		const [response, ] = (await db.execute(sql));
		businesses = response as Business[];
	} catch (e) {
		console.log(`Error: ${e}`);
	}

	return businesses;
}

businessModel.getBusinessIds = async (): Promise<number[] | null> => {
	const db = connection.promise();
	let ids: number[] | null = [];

	const sql = `SELECT empresaId FROM empresa;`;

	try {
		const [response, ] = (await db.execute(sql));

		// @ts-ignore
		for(let res of response) ids.push(res.empresaId);
	} catch (e) {
		console.log(`Error: ${e}`);
	}

	return ids;
}

export { businessModel };