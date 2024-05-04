import Donation from "../models/DonationModel.js";

export const saveDonation = async (req, res) => {
    const { amount } = req.body;

    try {
        await Donation.create({ amount });
        res.status(201).json({ msg: "Donation Recorded Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
