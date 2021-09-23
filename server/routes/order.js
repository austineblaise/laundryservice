import express from "express";
import expressAsyncHandler from "express-async-handler";
// import { isAuth } from "../middleware/isAuth.js";
// import {auth}  from "../middleware/auth.js";
import Order from "../models/order.js";

const orderRouter = express.Router();

orderRouter.post(
	"/",

	expressAsyncHandler(async (req, res) => {
		if (req.body.orderItems && req.body.orderItems.length === 0) {
			res.status(400).send({ message: "Cart is empty" });
		} else {
			const order = new Order({
				shippingInfo: req.body.shippingInfo,
				orderItems: req.body.orderItems,

				itemsPrice: req.body.itemsPrice,
				// shippingPrice: req.body.shippingPrice,
				// taxPrice: req.body.taxPrice,
				totalPrice: req.body.totalPrice,

				// user: req.user._id,
			});
			const createdOrder = await order.save();
			res
				.status(201)
				.send({ message: "New Order Created", order: createdOrder });
		}
	})
);



orderRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const order = await Order.find({});
		res.send(order);
	})
);



// productRouter.get(
// 	"/seed",
// 	expressAsyncHandler(async (req, res) => {
// 		// await Product.remove({})
// 		const createdProducts = await Product.insertMany(data.products);
// 		res.send({ createdProducts });
// 	})
// );

// orderRouter.get("/", expressAsyncHandler(async (req, res) => {
// 	const order = await Order.find({});
// 	res.send(order);
//   }));

orderRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			res.send(order);
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	})
);

export default orderRouter;
