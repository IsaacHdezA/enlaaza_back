import * as express from "express";
import { userControl } from "./user.controller";

const route = express.Router();

route.get("/all/:perPage/:page", userControl.getAllUsers);
route.get("/:id", userControl.getUserById);

export { route };
