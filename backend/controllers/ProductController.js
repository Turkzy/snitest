import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

/* GET */
export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

/* GET BY ID */
export const getProductById = async (req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

/* SAVE */
export const saveProduct = (req, res) => {
    if (!req.files || !req.files.file) return res.status(400).json({ msg: "No File Upload" });

    const name = req.body.name;
    const stocks = req.body.stocks;
    const buyingPrice = req.body.buyingPrice;
    const sellingPrice = req.body.sellingPrice;
    const category = req.body.category;
    const file = req.files.file;
    const fileSize = file.size;
    const ext = path.extname(file.name);
    const filename = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${filename}`;
    const allowType = ['.png','.jpg','.jpeg'];

    if (!allowType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if (fileSize > 10000000) return res.status(422).json({msg: "Image must be less than 10MB"});

    file.mv(`./public/images/${filename}`, async (err) => {
        if (err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name, stocks, buyingPrice, sellingPrice, image: filename, url, category}); 
            res.status(201).json({msg: "Product Created Successfully"});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({msg: "Internal Server Error"});
        }
    });
};

/* UPDATE */
export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!product) return res.status(404).json({ msg: "Product Not Found" });

    let filename = product.image;

    if (req.files && req.files.file) {
        const file = req.files.file;
        const fileSize = file.size;
        const ext = path.extname(file.name);
        filename = file.md5 + ext;
        const allowType = ['.png', '.jpg', '.jpeg'];

        if (!allowType.includes(ext.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Image Format" });
        }

        if (fileSize > 10000000) {
            return res.status(422).json({ msg: "Image must be less than 10MB" });
        }

        const filepath = `./public/images/${product.image}`;
        if (fs.existsSync(filepath)) {
            try {
                fs.unlinkSync(filepath);
            } catch (err) {
                return res.status(500).json({ msg: "Failed to delete existing image" });
            }
        }

        try {
            await file.mv(`./public/images/${filename}`);
        } catch (err) {
            return res.status(500).json({ msg: "Failed to upload image" });
        }
    }

    const { name, stocks, buyingPrice, sellingPrice, category } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${filename}`;

    try {
        await Product.update({ name, stocks, buyingPrice, sellingPrice, image: filename, url, category }, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({ msg: "Product Updated Successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};


/* DELETE */
export const deleteProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!product) return res.status(404).json({ msg: "Product Not Found" });
    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Deleted Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
