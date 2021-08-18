import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		orderItems: [
			{
				name: { type: String, required: true },
				stock: { type: Number, required: true },
				images: { type: String, required: true },
				price: { type: Number, required: true },
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
			},
		],

		shippingInfo: {
			fullName: { type: String, required: true },
			email: { type: String, required: true },
			phoneNo: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
		},

		itemsPrice: { type: Number, required: true },
		shippingPrice: { type: Number, required: true },
		taxPrice: { type: Number, required: true },
		totalPrice: { type: Number, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		isPaid: { type: Boolean, default: true },
		paidAt: { type: Date },
		isDelivered: { type: Boolean, default: true },
		deliveredAt: { type: Date },
	},
	{
		timestamps: true,
	}
);
const Order = mongoose.model("Order", orderSchema);
export default Order;

// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema({
// 	shippingInfo: {
// 		address: {
// 			type: String,
// 			required: true,
// 		},
// 		email: {
// 			type: String,
// 			required: true,
// 		},
// 		phoneNo: {
// 			type: String,
// 			required: true,
// 		},
// 		address: {
// 			type: String,
// 			required: true,
// 		},
// 		city: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	user: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		required: true,
// 		ref: "User",
// 	},
// 	orderItems: [
// 		{
// 			name: {
// 				type: String,
// 				required: true,
// 			},
// 			quantity: {
// 				type: Number,
// 				required: false,
// 			},
// 			image: {
// 				type: String,
// 				required: false,
// 			},
// 			price: {
// 				type: Number,
// 				required: true,
// 			},
// 			product: {
// 				type: mongoose.Schema.Types.ObjectId,
// 				required: false,
// 				ref: "Product",
// 			},
// 		},
// 	],
// 	paymentInfo: {
// 		id: {
// 			type: String,
// 		},
// 		status: {
// 			type: String,
// 		},
// 	},

// 	isPaid: {
// 		type: Boolean,
// 		default: true,
// 	},
// 	paidAt: {
// 		type: Date,
// 	},

// 	itemsPrice: {
// 		type: Number,
// 		required: true,
// 		default: 0.0,
// 	},
// 	taxPrice: {
// 		type: Number,
// 		required: false,
// 		default: 0.0,
// 	},
// 	shippingPrice: {
// 		type: Number,
// 		required: false,
// 		default: 0.0,
// 	},
// 	totalPrice: {
// 		type: Number,
// 		required: true,
// 		default: 0.0,
// 	},
// 	// user: {
// 	// 	type: mongoose.Schema.Types.ObjectId,
// 	// 	required: true,
// 	// 	ref: "User",
// 	// },
// 	orderStatus: {
// 		type: String,
// 		required: true,
// 		default: "Processing",
// 	},

// 	isDelivered: { type: Boolean, default: false },
// 	deliveredAt: {
// 		type: Date,
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},

// });

// const Order = mongoose.model("Order", orderSchema);

// export default Order;
