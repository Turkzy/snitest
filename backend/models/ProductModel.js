import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Product = db.define('product', {
    name: DataTypes.STRING,
    stocks: DataTypes.INTEGER,
    buyingPrice: DataTypes.FLOAT,
    sellingPrice: DataTypes.FLOAT,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    category: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;

(async () => {
    await db.sync();
})();
