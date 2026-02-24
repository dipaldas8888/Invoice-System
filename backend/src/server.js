import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectDB from "./config/db.js";
dotenv.config();

conectDB();

const app = express();
app.use(express.json);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
