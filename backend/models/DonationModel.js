import { DataTypes } from "sequelize"; 
import db from "../config/Database.js";

const Donation = db.define('donation',{
    amount: DataTypes.FLOAT,
},{
    freezeTableName: true
});

export default Donation;

(async () => {
    await db.sync();
})();
