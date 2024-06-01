// controllers/POSController.js

import Product from "../models/ProductModel.js";
import Transaction from "../models/TransactionModel.js";

export const processTransaction = async (req, res) => {
    const { items } = req.body;
    let totalAmount = 0;

    try {
        const transactionPromises = items.map(async (item) => {
            const product = await Product.findOne({
                where: { name: item.productName }
            });

            if (!product || product.stocks < item.quantity) {
                throw new Error(`Product ${item.productName} not available or insufficient stock.`);
            }

            const subTotal = item.quantity * item.price;
            totalAmount += subTotal;

            await Product.update(
                { stocks: product.stocks - item.quantity },
                { where: { id: product.id } }
            );

            await Transaction.create({
                productName: item.productName,
                quantity: item.quantity,
                price: item.price,
                subTotal: subTotal,
                totalAmount: totalAmount
            });
        });

        await Promise.all(transactionPromises);

        res.status(200).json({ message: "Transaction processed successfully", totalAmount: totalAmount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};
