import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";
import data from "./data.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get("/api/products", (req, res) => {
	res.send(data.products);
});

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