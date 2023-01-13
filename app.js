import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './routes/itemRoute.js';


const URI = process.env.MONGO || "mongodb://localhost:27017/ekz"
const app = express();
const PORT = 4000;

mongoose
  .connect(URI)
  .then(() => console.log(`Mit Datenbank verbunden.`))
  .catch((err) => console.log(`Verbinden mit Datenbank fehlgeschlagen.`, err));

mongoose.connection.on("error", console.log);


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});



