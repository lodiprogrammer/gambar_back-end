import pesanan from "../models/PesananModel.js";


export const getPesanan = async (req, res) => {
    try {
        const response = await pesanan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPesananById = async (req, res) => {
    try {
        const response = await pesanan.findOne({
            where: {
                id_pesanan: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const savePesanan = async (req, res) => {

    const jenis = req.body.jenis;
    const nama = req.body.nama;
    const harga = req.body.harga;
    const qty = req.body.qty;
    const total = req.body.total;
    const nomor = req.body.nomor;

    await pesanan.create({

        no_pesanan: nomor,
        nama_menu: nama,
        jenis_menu: jenis,
        harga_menu: harga,
        qty_pesanan: qty,
        total_pesanan: total
    });
    res
        .status(201)
        .json({
            msg: "Pesanan Created Successfuly"
        });


}

export const updatePesanan = async (req, res) => {
    const jenis = req.body.jenis;
    const nama = req.body.nama;
    const harga = req.body.harga;
    const qty = req.body.qty;
    const total = req.body.total;
    const nomor = req.body.nomor;


    try {
        await pesanan.update({
            no_pesanan: nomor,
            nama_menu: nama,
            jenis_menu: jenis,
            harga_menu: harga,
            qty_pesanan: qty,
            total_pesanan: total
        }, {
            where: {
                id_pesanan: req.params.id
            }
        });
        res
            .status(200)
            .json({
                msg: "Pesanan Updated Successfuly"
            });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePesanan = async (req, res) => {

    try {

        await pesanan.destroy({
            where: {
                id_pesanan: req.params.id
            }
        });
        res
            .status(200)
            .json({
                msg: "Pesanan Deleted Successfuly"
            });
    } catch (error) {
        console.log(error.message);
    }
}