import { Business } from "./business";
import { businessModel } from "./business.model";
import { Request, Response } from "express";

const businessControl = () => {};

businessControl.getAllBusinesses = async (req: Request, res: Response) => {
	let businesses: Business[] | null = [];

	businesses = await businessModel.getAllBusinesses();

	res.send(businesses);
};

businessControl.getBusinessById = async (req: Request, res: Response) => {
	let business: Business | null = null;
	const id: number = req.params.id as any as number;

	business = await businessModel.getBusinessById(id);

	res.send(business);
}

businessControl.getBusinessIds = async (req: Request, res: Response) => {
	let ids: number[] | null = [];

	ids = await businessModel.getBusinessIds();

	res.send(ids);
};

export { businessControl };