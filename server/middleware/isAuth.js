// import jwt from "jsonwebtoken";
// import asyncHandler from "express-async-handler";
// // import User from '../models/userModel.js'
// // import User from "../models/users.js";

// export const isAuth = asyncHandler(async (req, res, next) => {
// 	let token;

// 	if (
// 		req.headers.authorization
	
// 	) {
// 		try {
// 			token = req.headers.authorization.split(" ")[1];

// 			// const decoded = jwt.verify(
// 			// 	token, "somethingsecret"

		
// 			// );

// 			const decoded = jwt.verify(token, process.env.JWT_SECRET || "somethingsecret")

// 			// req.user = await User.findById(decoded.id).select("-password");

// 			next();
// 		} catch (error) {
// 			console.error(error);
// 			res.status(401);
// 			throw new Error("Not authorized, token failed");
// 		}
// 	}

// 	if (!token) {
// 		res.status(401);
// 		throw new Error("Not authorized, no token");
// 	}
// });


import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (authorization) {
		const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    res.json({ token: token });

		jwt.verify(
			token,
			process.env.JWT_SECRET || "somethingsecret",
			(err, decode) => {
				if (err) {
          res.status(401).send({ message: "Invalid Token" });

				} else {
					req.user = decode;
          next();
        }

      }

		);
	} else {
    res.status(401).send({ message: "No Token" });

	}
};
