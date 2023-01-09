import express from "express";
import {
    getPesanan,
    getPesananById,
    savePesanan,
    updatePesanan,
    deletePesanan
} from "../controllers/PesananController.js";

const router = express.Router();

router.get('/pesanan', getPesanan);
router.get('/pesanan/:id', getPesananById);
router.post('/pesanan', savePesanan);
router.patch('/pesanan/:id', updatePesanan);
router.delete('/pesanan/:id', deletePesanan);

export default router;