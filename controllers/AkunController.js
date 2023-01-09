import akun from "../models/AkunModel.js";


export const getAkun = async (req, res) => {
    try {
        const response = await akun.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAkunById = async (req, res) => {
    try {
        const response = await akun.findOne({
            where: {
                id_akun: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveAkun = async (req, res) => {

    const nama = req.body.nama;
    const password = req.body.password;
    const status = req.body.status;

    await akun.create({

        nama_akun: nama,
        password_akun: password,
        status: status
    });
    res
        .status(201)
        .json({
            msg: "Akun Created Successfuly"
        });


}

export const updateAkun = async (req, res) => {
    const nama = req.body.nama;
    const password = req.body.password;
    const status = req.body.status;


    try {
        await akun.update({
            nama_akun: nama,
            password_akun: password,
            status: status
        }, {
            where: {
                id_akun: req.params.id
            }
        });
        res
            .status(200)
            .json({
                msg: "Akun Updated Successfuly"
            });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAkun = async (req, res) => {

    // const akun = await akun.findOne({
    //     where: {
    //         id_akun: req.params.id
    //     }
    // });
    // if (!akun)
    //     return res
    //         .status(404)
    //         .json({
    //             msg: "No Data Found"
    //         });

    try {

        await akun.destroy({
            where: {
                id_akun: req.params.id
            }
        });
        res
            .status(200)
            .json({
                msg: "Akun Deleted Successfuly"
            });
    } catch (error) {
        console.log(error.message);
    }
}