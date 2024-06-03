import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Product = db.define('product', {
    name: DataTypes.STRING,
    stocks: DataTypes.INTEGER,
    buyingPrice: DataTypes.FLOAT,
    sellingPrice: DataTypes.FLOAT,
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    category: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;

(async () => {
    await db.sync();
})();
