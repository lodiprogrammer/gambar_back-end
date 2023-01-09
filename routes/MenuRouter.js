import express from "express";
import {
    getMenu,
    getMenuById,
    saveMenu,
    updateMenu,
    deleteMenu
} from "../controllers/MenuController.js";

const router = express.Router();

router.get('/menu', getMenu);
router.get('/menu/:id', getMenuById);
router.post('/menu', saveMenu);
router.patch('/menu/:id', updateMenu);
router.delete('/menu/:id', deleteMenu);

export default router;