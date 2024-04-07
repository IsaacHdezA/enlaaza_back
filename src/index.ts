import express from 'express';
import * as dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if(!process.env.PORT) {
  console.log("No port value specified...");
}

const app = express();
const port = parseInt(process.env.PORT as string, 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send("Running Enlaaza backend");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
