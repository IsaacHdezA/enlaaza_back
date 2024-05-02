import * as express from "express";
import { userControl } from "./user.controller";

const route = express.Router();

route.get("/all", userControl.getAllUsers);
route.get("/:id", userControl.getUserById);

export { route };
