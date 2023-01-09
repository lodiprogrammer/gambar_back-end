import {
    Sequelize
} from "sequelize";
import db from "../config/Database.js";

const {
    DataTypes
} = Sequelize;

const akun = db.define('tb_akun', {

    id_akun: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_akun: {
        type: Sequelize.STRING
    },
    password_akun: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }

}, {

    freezeTableName: true,
    // If don't want createdAt(kalau pakai Sequelize database automatis di buat dan udah ada createat sama updateat, jadi gw ngilangin itu pake syntax ini)
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false
});

export default akun;

(async () => {
    await db.sync();
})();