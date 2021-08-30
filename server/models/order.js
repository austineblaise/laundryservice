import mongoose from "mongoose";
// const shortid = require("shortid");
import shortid  from "shortid";

const orderSchema = mongoose.Schema({
	// _id: {
	// 	'type': String,
	// 	'default': shortid.generate
	//   },
	  
	shippingInfo: {
		collectionDate: {
			type: String,
		},

		fullName: {
			type: String,
		},

		address: {
			type: String,
		},
		email: {
			type: String,
		},
		phoneNo: {
			type: String,
		},
		address: {
			type: String,
		},
		city: {
			type: String,
		},
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required: true,
	// 	ref: "User",
	// },
	orderItems: [
		{
			

			name: {
				type: String,
			},
			quantity: {
				type: Number,
			},
		
			price: {
				type: Number,
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,

				ref: "Product",
				
				// unique: true
			},

			// _id: {new mongoose.Types.ObjectId(),}
			//_id: {new mongoose.Type.}
		},
	],
	paymentInfo: {
		id: {
			type: String,
		},
		status: {
			type: String,
		},
	},

	isPaid: {
		type: Boolean,
		default: true,
	},
	paidAt: {
		type: Date,
	},

	itemsPrice: {
		type: Number,
	},
	
	totalPrice: {
		type: Number,
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required: true,
	// 	ref: "User",
	// },
	orderStatus: {
		type: String,
		required: true,
		default: "Processing",
	},

	isDelivered: { type: Boolean, default: false },
	deliveredAt: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
