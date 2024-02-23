import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import empInfoRoute from "./routes/EmpInfo.js";
import sheetRoute from './routes/TimeSheet.js';

const app = express();
app.use(cors(
  {
    origin:["https://time-sheet-management-zeta.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 4000;
app.use("/", empInfoRoute);
app.use("/", sheetRoute);
app.get("/",(req,res)=>{
  res.json("hello");
})

mongoose.connect(`mongodb+srv://project1:jtQgREqnQpXqKB9a@cluster0.vjk5qmt.mongodb.net/?retryWrites=true&w=majority`).then(() => { app.listen(PORT, () => console.log("server start at " + PORT)) }).catch(() => console.log("error"));
