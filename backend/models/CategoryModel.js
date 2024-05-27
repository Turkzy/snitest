import { DataTypes } from "sequelize"; 
import db from "../config/Database.js";

const Category = db.define('category', {
    category: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Category;
