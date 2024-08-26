import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoute from "./route/BlogApi.js";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db is connected"))
  .catch(err => console.error("db connection error: ", err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

app.use("/blog", blogRoute);
app.get("/getData", (req, res) => {
  res.send("second user");
});
