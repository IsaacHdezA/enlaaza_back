import { Business } from "./business";
import { businessModel } from "./business.model";
import { Request, Response } from "express";
import utils from "../utilities/utils";

const businessControl = () => {};

businessControl.getAllBusinesses = async (req: Request, res: Response) => {
	let businesses: Business[] | null = [];

	businesses = await businessModel.getAllBusinesses();

	res.send(businesses);
};

businessControl.getBusinessIds = async (req: Request, res: Response) => {
	let businesses: number[] | null = [];

	businesses = await businessModel.getBusinessIds();

	res.send(businesses);
};

export { businessControl };