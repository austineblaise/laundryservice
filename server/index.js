import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";
import products from "./routes/product.js";
// import data from "./data.js";
import productRouter from "./routes/product.js";
import orderRouter from "./routes/order.js";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

dotenv.config();

connectDB();

const app = express();

//connecting database
// dotenv.config({path: 'server/config/config.env'})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use("/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("hello to laundrymasters API....");
	});
}

// app.get("/", (req, res) => {
// 	res.send("hello to laundrymasters API....");
// });

// const __dirname = path.resolve();
// // app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/build")));

// 	app.get("*", (req, res) =>
// 		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// 	);
// } else {
// 	app.get("/", (req, res) => {
// 		res.send("API is running....");
// 	});
// }

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);

// const CONNECTION_URL =
// 	"mongodb+srv://laundrymasters:laundry1991@cluster0.jtbv8.mongodb.net/laundrymasters?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 5000;

// mongoose
// 	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// 	.then(() =>
// 		app.listen(PORT, () =>
// 			console.log(`Server Running on Port: http://localhost:${PORT}`)
// 		)
// 	)
// 	.catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
