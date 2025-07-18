import express from 'express';
import {getRiskAnalysis} from '../controllers/risk.controller.js';

const router = express.Router();

router.post('/getRiskAnalysis', getRiskAnalysis);

export default router;