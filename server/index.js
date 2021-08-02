import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";
import products from "./routes/product.js";
// import data from "./data.js";
import productRouter from "./routes/product.js";
// import dotenv from "dotenv";

const app = express();

//connecting database
// dotenv.config({path: 'server/config/config.env'})

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/api/products", productRouter);

const CONNECTION_URL =
	"mongodb+srv://laundrymasters:laundry1991@cluster0.jtbv8.mongodb.net/laundrymasters?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server Running on Port: http://localhost:${PORT}`)
		)
	)
	.catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
