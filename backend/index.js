import express from 'express';
import dotenv from 'dotenv';
import riskRouter from './routes/risk.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
//Routes
app.use('/api', riskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Running  http://localhost:${PORT}`)
})