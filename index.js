import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';
import rootRouter from './src/routes/index.js';
dotenv.config();
const Port = process.env.PORT || 5000;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", rootRouter);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});



