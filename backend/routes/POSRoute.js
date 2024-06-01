import express from "express";
import { processTransaction, getTransactions } from "../controllers/POSController.js";

const router = express.Router();

router.post('/processTransaction', processTransaction);
router.get('/transactions', getTransactions);

export default router;
