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

businessModel.getBusinessById = async (id: number): Promise<Business | null> => {
	const db = connection.promise();
	let business: Business | null = null;

	const sql = "SELECT * FROM empresa WHERE empresaId = ?";

	try {
		const [response, ] = (await db.execute(sql, [id]));

		if(Array.isArray(response)) business = response[0] as any as Business;
	} catch (e) {
		console.log(`Error: ${e}`);		
	}

	return business;
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