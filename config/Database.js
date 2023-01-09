import { Sequelize } from "sequelize";

const db = new Sequelize('warung_soto', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});

export default db;