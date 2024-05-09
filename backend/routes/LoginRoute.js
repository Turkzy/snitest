// LoginRoute.js

import express from "express";
import { login, getAdmins, getAdminById, saveAdmin, updateAdmin, deleteAdmin } from "../controllers/LoginController.js";

const router = express.Router();

router.post('/login', login);
router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminById);
router.post('/admins', saveAdmin);
router.patch('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

export default router;
