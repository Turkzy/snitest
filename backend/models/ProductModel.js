import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Product = db.define('product', {
    name: DataTypes.STRING,
    stocks: DataTypes.INTEGER,
    buyingPrice: DataTypes.FLOAT,
    sellingPrice: DataTypes.FLOAT,
    image: {
        type: DataTypes.STRING,
        allowNull: true, // Allow null values for image
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true, // Allow null values for url
    },
    category: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;

(async () => {
    await db.sync();
})();
