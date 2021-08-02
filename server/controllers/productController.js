 const getProducts = async (req, res, next) => {
	res.status(200).json({
		success: true,
		message: "this route will show all route in the data base",
	});
};

export default getProducts;