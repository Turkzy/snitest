// LoginController.js

import Admin from "../models/AdminModel.js";

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({
            where: { username, password }
        });
        if (admin) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
