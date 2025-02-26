import { Sequelize } from "sequelize";

const db = new Sequelize('sql12764742', 'sql12764742', 'Y9h3Pvlmv1', {
    host: 'sql12.freesqldatabase.com',
    dialect: "mysql",
    port: 3306, // Make sure to specify the correct port
    logging: false // Disable logging for cleaner console output
});

export default db;