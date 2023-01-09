import {
    Sequelize
} from "sequelize";
import db from "../config/Database.js";

const {
    DataTypes
} = Sequelize;

const menu = db.define('tb_menu', {

    id_menu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_menu: {
        type: Sequelize.STRING
    },
    jenis_menu: {
        type: Sequelize.STRING
    },
    gambar: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    harga_menu: {
        type: Sequelize.STRING
    }

}, {

    freezeTableName: true,
    // If don't want createdAt(kalau pakai Sequelize database automatis di buat dan udah ada createat sama updateat, jadi gw ngilangin itu pake syntax ini)
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false
});

export default menu;

(async () => {
    await db.sync();
})();