import { Pool } from "mysql2/promise";

export class Pager<T> {
	totalCount: number;
	itemsPerPage: number;
	page: number;
	totalPages: number;
	data: T[];

	constructor(itemsPerPage: number = -1, page: number = -1) {
		this.itemsPerPage = itemsPerPage;
		this.page = page;

		this.totalCount = -1;
		this.totalPages = -1;
		this.data = [];
	}

	async getPagerData(db: Pool, table: string) {
		let sql = `SELECT COUNT(*) as totalCount FROM ${table}`;

		try {
			const [res, ] = await db.execute(sql);

			if(Array.isArray(res)) this.totalCount = (res[0] as any).totalCount;
			this.totalPages = Math.floor(this.totalCount / this.itemsPerPage) + Number((this.totalCount % this.itemsPerPage) != 0);
		} catch (e) {
			console.log(`Error getting total count: ${e}`);
		}
	}
};