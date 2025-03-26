const Order = require('../Models/orderModel');

//get all orders
const getAllorder = async (req, res) => {
    let orders = await Order.find();
    res.json(orders);
}

//get single order
const getSingleOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "order not found" });
        }
        res.json(order);
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Id" });

    }

}

//add new order
const addNewOrder = async (req, res) => {
    try {
        let order = new Order(req.body);
        await order.save()
        res.json(order);

    } catch (error) {
        return res.status(400).json(error);
    }
}

//update order
const updateOrder = async (req, res) => {
    const id = req.params.orderId;
    if (req.body.total_price < 0) {
        return res.status(400).json({ message: "price cannot be negative" });
    }
    let order = await Order.findByIdAndUpdate(id, req.body, { new: true })
    res.json(order);
}

//delete order
const deleteOrder = async (req, res) => {
    const id = req.params.orderId;
    let order = await Order.findByIdAndDelete(id);
    if (!order) {
        return res.status(400).json({ message: "order not found!" });
    }
    res.json({"message":"order deleted successfully"});
    //res.json(order);
}

module.exports = {
    getAllorder,
    getSingleOrder,
    addNewOrder,
    updateOrder,
    deleteOrder
}