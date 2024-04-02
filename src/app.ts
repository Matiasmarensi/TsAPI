import express from "express";
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 3001;
import { router } from "./routes/index";
import db from "./config/mongo";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("DB Connected"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
