import express from "express";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";
import subjectRoute from "./routes/subject.js";

dotenv.config({path:'./.env'})


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
dbConnect();

app.use("/api/subject", subjectRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server connected to ${PORT}`));