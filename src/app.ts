import * as dotenv from "dotenv";

dotenv.config();

if(!process.env.PORT) {
  console.log("No port value specified...");
  process.exit();
}

import express from 'express';
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
