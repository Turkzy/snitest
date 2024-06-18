import { DataTypes } from "sequelize"; 
import db from "../config/Database.js";

const Category = db.define('category', {
    category: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true
});

export default Category;
