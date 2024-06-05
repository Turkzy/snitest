import { DataTypes } from "sequelize"; 
import db from "../config/Database.js";

const Admin = db.define('admin', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    usertype: DataTypes.STRING,
    email: DataTypes.STRING // Add email column
}, {
    freezeTableName: true
});

export default Admin;
