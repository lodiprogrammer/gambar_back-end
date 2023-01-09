import menu from "../models/MenuModel.js";
import path from "path";
import fs from "fs";

export const getMenu = async (req, res) => {
    try {
        const response = await menu.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMenuById = async (req, res) => {
    try {
        const response = await menu.findOne({
            where: {
                id_menu: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveMenu = (req, res) => {
    if (req.files === null) return res.status(400).json({
        msg: "No File Uploaded"
    });
    const nama = req.body.nama;
    const jenis = req.body.jenis;
    const harga = req.body.harga;
    const file = req.files.gambar;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const urlGambar = `${req.protocol}://${req.get("host")}/menu/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({
        msg: "Invalid Images"
    });
    if (fileSize > 5000000) return res.status(422).json({
        msg: "Image must be less than 5 MB"
    });

    file.mv(`./public/menu/${fileName}`, async (err) => {
        if (err) return res.status(500).json({
            msg: err.message
        });
        try {
            await menu.create({
                nama_menu: nama,
                jenis_menu: jenis,
                gambar: fileName,
                url: urlGambar,
                harga_menu: harga


            });
            res.status(201).json({
                msg: "Menu Created Successfuly"
            });
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateMenu = async (req, res) => {
    const var_menu = await menu.findOne({
        where: {
            id_menu: req.params.id
        }
    });
    if (!var_menu) return res.status(404).json({
        msg: "No Data Found"
    });

    let fileName = "";
    if (req.files === null) {
        fileName = var_menu.gambar;
    } else {

        const file = req.files.gambar;

        // const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({
            msg: "Invalid Images"
        });
        if (fileSize > 5000000) return res.status(422).json({
            msg: "Image must be less than 5 MB"
        });

        const filepath = `./public/menu/${var_menu.gambar}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/menu/${fileName}`, (err) => {
            if (err) return res.status(500).json({
                msg: err.message
            });
        });
    }

    const nama = req.body.nama;
    const jenis = req.body.jenis;
    const harga = req.body.harga;
    // const name = req.body.title;
    const urlGambar = `${req.protocol}://${req.get("host")}/menu/${fileName}`;

    try {
        await menu.update({
            nama_menu: nama,
            jenis_menu: jenis,
            gambar: fileName,
            url: urlGambar,
            harga_menu: harga
        }, {
            where: {
                id_menu: req.params.id
            }
        });
        res.status(200).json({
            msg: "Menu Updated Successfuly"
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMenu = async (req, res) => {
    const var_menu = await menu.findOne({
        where: {
            id_menu: req.params.id
        }
    });
    if (!var_menu)
        return res
            .status(404)
            .json({
                msg: "No Data Found"
            });

    try {
        const filepath = `./public/menu/${var_menu.gambar}`;
        fs.unlinkSync(filepath);
        await menu.destroy({
            where: {
                id_menu: req.params.id
            }
        });
        res
            .status(200)
            .json({
                msg: "Menu Deleted Successfuly"
            });
    } catch (error) {
        console.log(error.message);
    }
}