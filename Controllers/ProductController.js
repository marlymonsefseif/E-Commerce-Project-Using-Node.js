const Product = require('../Models/productModel');

//get all products
const getAllProducts = async (req, res) => {
    let products = await Product.find();
    res.json(products);
}

//get single product
const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        res.json(product);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Id" });

    }

}

//add new product
const addNewProduct = async (req, res) => {
    try {
        let product = new Product(req.body);
        await product.save()
        res.json(product);

    } catch (error) {
        return res.status(400).json(error);
    }

}

//update product
const updateProduct = async (req, res) => {
    const id = req.params.productId;

    if (!req.body.name) {
        return res.status(400).json({ message: "name cannot be empty" });
    }
    if (req.body.price < 0) {
        return res.status(400).json({ message: "price cannot be negative" });
    }
    if (!req.body.category) {
        return res.status(400).json({ message: "category cannot be empty" });
    }

    let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.json(product);
}

//delete product
const deleteProduct = async (req, res) => {
    const id = req.params.productId;
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
        return res.status(400).json({ message: "product not found!" });
    }
    res.json({"message":"product deleted successfully"});
    //res.json(product)
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    addNewProduct,
    updateProduct,
    deleteProduct
}