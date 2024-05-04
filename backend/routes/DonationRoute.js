import express from "express";
import { saveDonation } from "../controllers/DonationController.js";

const router = express.Router();

router.post('/Donation', saveDonation);

export default router;
