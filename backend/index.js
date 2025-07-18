import express from 'express';
import dotenv from 'dotenv';
import riskRouter from './routes/risk.routes.js';
dotenv.config();

const app = express();
app.use(express.json());
//Routes
app.use('/api', riskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Running  http://locahost:${PORT}`)
})