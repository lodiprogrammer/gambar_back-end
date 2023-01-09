import {
    Sequelize
} from "sequelize";
import db from "../config/Database.js";

const {
    DataTypes
} = Sequelize;

const pesanan = db.define('tb_pesanan', {

    id_pesanan: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    no_pesanan: {
        type: Sequelize.STRING
    },
    jenis_menu: {
        type: Sequelize.STRING
    },
    nama_menu: {
        type: Sequelize.STRING
    },
    harga_menu: {
        type: Sequelize.STRING
    },
    qty_pesanan: {
        type: Sequelize.STRING
    },
    total_pesanan: {
        type: Sequelize.STRING
    }

}, {

    freezeTableName: true,//agar nama table sesuai dengan yang dibuat
    // If don't want createdAt(kalau pakai Sequelize database automatis di buat dan udah ada createat sama updateat, jadi gw ngilangin itu pake syntax ini)
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false
});

export default pesanan;

(async () => {
    await db.sync();
})();