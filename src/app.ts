import express from "express";
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 3001;
import { router } from "./routes/index";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});