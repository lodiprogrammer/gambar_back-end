import express from "express";
import {
    getAkun,
    getAkunById,
    saveAkun,
    updateAkun,
    deleteAkun
} from "../controllers/AkunController.js";

const router = express.Router();

router.get('/akun', getAkun);
router.get('/akun/:id', getAkunById);
router.post('/akun', saveAkun);
router.patch('/akun/:id', updateAkun);
router.delete('/akun/:id', deleteAkun);

export default router;