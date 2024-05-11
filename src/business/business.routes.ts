import * as express from "express";
import { businessControl } from "./business.controller";

const route = express.Router();

route.get("/all", businessControl.getAllBusinesses);
route.get("/:id", businessControl.getBusinessById);

export { route };
