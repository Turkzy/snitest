import Category from "../models/CategoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id }
        });
        res.json(category);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const saveCategory = async (req, res) => {
    const { category } = req.body;
    try {
        await Category.create({ category });
        res.status(201).json({ message: "Category Created Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateCategory = async (req, res) => {
    const { category } = req.body;
    try {
        await Category.update({ category }, {
            where: { id: req.params.id }
        });
        res.status(200).json({ message: "Category Updated Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await Category.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ message: "Category Deleted Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
