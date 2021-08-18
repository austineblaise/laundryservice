import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../middleware/isAuth.js";
// import auth  from "../middleware/auth.js";
import Order from "../models/order.js";

const orderRouter = express.Router();

orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		if (req.body.orderItems.length === 0) {
			res.status(400).send({ message: "Cart is empty" });
		} else {
			const order = new Order({
				//   seller: req.body.orderItems[0].seller
				orderItems: req.body.orderItems,
				shippingInfo: req.body.shippingInfo,

				itemsPrice: req.body.itemsPrice,
				shippingPrice: req.body.shippingPrice,
				taxPrice: req.body.taxPrice,
				totalPrice: req.body.totalPrice,
				user: req.user._id,
			});
			const createdOrder = await order.save();
			res
				.status(201)
				.send({ message: "New Order Created", order: createdOrder });
		}
	})
);

export default orderRouter;
