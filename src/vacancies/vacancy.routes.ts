import * as express from "express";
import { vacancyControl } from "./vacancy.controller";

const route = express.Router();

route.get("/all", vacancyControl.getAllVacancies);

export { route };
