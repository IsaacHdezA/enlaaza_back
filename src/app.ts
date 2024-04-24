import * as dotenv from "dotenv";
import express from 'express';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { route as user_route } from "./user/user.routes";
import { route as vacancy_route } from "./vacancies/vacancy.routes";

dotenv.config();

if(!process.env.PORT) {
  console.log("No port value specified...");
  process.exit();
}

const app = express();
const port = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users/", user_route);
app.use("/vacancies/", vacancy_route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
