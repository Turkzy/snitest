// models/TransactionModel.js

import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Transaction = db.define('transaction', {
    productName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    subTotal: DataTypes.FLOAT,
    totalAmount: DataTypes.FLOAT
}, {
    freezeTableName: true,
    timestamps: true,
});

export default Transaction;
