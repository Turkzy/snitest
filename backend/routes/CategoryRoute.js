import express from "express";
import { getCategories, getCategoryById, saveCategory, updateCategory, deleteCategory } from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories', saveCategory);
router.patch('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
