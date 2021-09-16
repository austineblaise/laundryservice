import React, { useEffect } from "react";

// import {makeStyles} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Naira from "react-naira";

// import { Link } from 'react-router';

import {
	Grid,
	TableContainer,
	Table,
	Typography,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Select,
	MenuItem,
	Button,
	Card,
	List,
	ListItem,
} from "@material-ui/core";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { useSelector } from "react-redux";
import SelectionNavbar from "../SelectionNavbar/SelectionNavbar";
import { removeFromCart } from "../../Redux/actions/addremovecart";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listProducts } from "../../Redux/actions/productActions";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import {
	clearItems,
	decreaseCartt,
	increaseCart,
} from "../../Redux/actions/addremovecart";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// const useStyles = makeStyles({
//     main:{
//         minHeight:'80vh'
//     }
// })

const Cart = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	//history.push('/auth?redirect=/checkout');

	// useEffect(() => {
	// 	dispatch(listProducts());
	// }, [dispatch]);

	const remove = (product) => {
		dispatch(removeFromCart(product));
	};

	const increase = (product) => {
		dispatch(increaseCart(product));
	};

	const decrease = (product) => {
		dispatch(decreaseCartt(product));
	};

	const clear = () => {
		dispatch(clearItems());
		toast.error("Cart Cleared!!!!", { position: "bottom-left" });
	};

	// const checkoutHandler = () => {
	// 	history.push("/checkout");
	// 	history.push('/auth?redirect=checkout');
	// // history.push('/auth?redirect)
	// };

	const handleClick = () => {
		history.push("/selectionpage");
	};

	const checkoutHandler = () => {
        history.push('checkout');
    }

	//  onClick={checkoutHandler}
	// 0nClick={checko}

	//increaseCart



















	return (
		<div style={{ minHeight: "100vh", overflowX: 'hidden' }}>
			<SelectionNavbar />
			<Typography component="h4" variant="h4">
				My Cart
			</Typography>
			{cartItems.length === 0 ? (
				<div>
					Cart is empty. <Link to="/selectionpage">Go shopping</Link>
				</div>
			) : (
				<Grid container spacing={1}>
					<Grid item md={9} xs={12}>
						<TableContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Image</TableCell>
										<TableCell>Name</TableCell>
										<TableCell align="center">Quantity</TableCell>
										<TableCell align="center">Price</TableCell>
										<TableCell align="center">Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{cartItems.map((item) => (
										<TableRow key={item._id}>
											<TableCell>
												<Link>
													<ListItemAvatar>
														<Avatar>
															<ImageIcon />
														</Avatar>
													</ListItemAvatar>
												</Link>
											</TableCell>

											<TableCell>
												<Typography style={{ color: "#151E3D" }}>
													{item.name}
												</Typography>
											</TableCell>
											<TableCell align="center">
												{/* <Select value={item.quantity}>
													{[...Array(item.countInStock).keys()].map((x) => (
														<MenuItem key={x + 1} value={x + 1}>
															{x + 1}
														</MenuItem>
													))}
												</Select> */}

												

												<IconButton
													color="primary"
													aria-label="add to shopping cart"
													onClick={() => increase(item)}
												>
													<ArrowDropUpIcon />
												</IconButton>

												{item.count}

												<IconButton
													color="primary"
													aria-label="add to shopping cart"
													onClick={() => decrease(item)}
												>
													<ArrowDropDownIcon />
												</IconButton>

											</TableCell>
											<TableCell align="center" style={{ color: "tomato" }}>
												<Naira>{item.price}</Naira>
											</TableCell>
											<TableCell align="center">
												{/* <Button
													onClick={() => remove(item)}
													variant="contained"
													color="secondary"
												>
													x
												</Button> */}

												<Button
													variant="contained"
													color="secondary"
													onClick={() => remove(item)}
													// className={classes.button}
													startIcon={<DeleteIcon />}
												>
													Delete
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					<Grid md={3} xs={12}>
						<Card>
							<List>
								<ListItem>
									<Typography variant="h5">
										Subtotal ({cartItems.reduce((a, c) => a + c.count, 0)}{" "}
										items) : N
										{cartItems.reduce((a, c) => a + c.count * c.price, 0)}
									</Typography>
								</ListItem>
								<ListItem>
									<Button
										onClick={checkoutHandler}
										variant="contained"
										// onClick={checkoutHandler}
										color="primary"
										fullWidth
									>
										Check Out
									</Button>
								</ListItem>
								<Typography onClick={handleClick} style={{ cursor: "pointer" }}>
									Continue Shopping <AddShoppingCartIcon />
								</Typography>
							</List>

							<List>
								<ListItem>
									<Button
										
										variant="contained"
										color="secondary"
										fullWidth
										onClick={() => clear()}
									>
										Clear Cart
									</Button>
								</ListItem>
							</List>
						</Card>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default Cart;

// import React, { useEffect } from "react";
// // import {makeStyles} from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles";
// import Naira from "react-naira";

// // import {Link} from 'react-router-dom';

// import {
// 	Grid,
// 	TableContainer,
// 	Table,
// 	Typography,
// 	TableHead,
// 	TableBody,
// 	TableRow,
// 	TableCell,
// 	Link,
// 	Select,
// 	MenuItem,
// 	Button,
// 	Card,
// 	List,
// 	ListItem,
// } from "@material-ui/core";
// import IconButton from "@material-ui/core/IconButton";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import ImageIcon from "@material-ui/icons/Image";
// import { useSelector } from "react-redux";
// import SelectionNavbar from "../SelectionNavbar/SelectionNavbar";
// import {
// 	clearItems,
// 	decreaseCartt,
// 	increaseCart,
// 	removeFromCart,
// } from "../../Redux/actions/addremovecart";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { listProducts } from "../../Redux/actions/productActions";
// import { addToCart, decreaseCart } from "../../Redux/cartSlice/cartSlice";
// import link from "react-router-dom";
// import DeleteIcon from "@material-ui/icons/Delete";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

// const useStyles = makeStyles({
// 	main: {
// 		minHeight: "80vh",
// 	},

// 	paper: {
// 		overflowY: "scroll",
// 		height: "90vh",
// 	},
// });

// const Cart = () => {
// 	const dispatch = useDispatch();
// 	let history = useHistory();
// 	const classes = useStyles();

// 	const cart = useSelector((state) => state.cart);

// 	const { cartItems } = cart;

// 	// useEffect(() => {
// 	// 	dispatch(listProducts());
// 	// }, [dispatch]);

// 	// const remove = (product) => {
// 	// 	dispatch(removeFromCart(product));
// 	// };

// 	// const remove = (product) => {
// 	// 	dispatch( decreaseCartt(product));

// 	// };

// 	const remove = (product) => {
// 		dispatch(removeFromCart(product));
// 	};

// 	//decreaseCart

// 	const checkoutHandler = () => {
// 		history.push("/checkout");
// 		// history.push('/auth?redirect=checkout');
// 	};

// 	const addToCarto = (product) => {
// 		dispatch(addToCart(product));
// 	};

// 	const handleClick = ()=>{
// 		history.push("/selectionpage");
// 	  }

// 	//  onClick={checkoutHandler}

// 	return (
// 		<>
// 		<div style={{ minHeight: "100vh" }}>
// 			<SelectionNavbar />
// 			<div>
// 			<Typography component="h4" variant="h4">
// 				My Cart
// 			</Typography>
// 			{cartItems.length === 0 ? (
// 				<div onClick={handleClick} style={{cursor:'pointer'}}>
// 					Cart is empty.<Link passHref> Go shopping</Link>
// 				</div>
// 			) : (
// 				<Grid container spacing={1}>
// 					<Grid item md={9} xs={12}>
// 						<TableContainer className={classes.paper}>
// 							<Table>
// 								<TableHead>
// 									<TableRow>
// 										<TableCell>Image</TableCell>
// 										<TableCell>Name</TableCell>
// 										<TableCell align="center">Quantity</TableCell>
// 										<TableCell align="center">Price</TableCell>
// 										<TableCell align="center">Action</TableCell>
// 									</TableRow>
// 								</TableHead>

// 												{/* <Button
// 													// onClick={() => remove(item)}
// 													onClick={() => dispatch(decreaseCartt(item))}
// 													variant="contained"
// 													color="secondary"
// 												>
// 													x
// 												</Button> */}
// 											</TableCell>
// 										</TableRow>
// 									))}
// 								</TableBody>
// 							</Table>
// 						</TableContainer>
// 					</Grid>
// 					<Grid md={3} xs={12}>
// 						<Card>
// 							<List>
// 								<ListItem>
// 									<Typography variant="h5">
// 										Subtotal ({cartItems.reduce((a, c) => a + c.count, 0)}{" "}
// 										items) : N
// 										{cartItems.reduce((a, c) => a + c.count * c.price, 0)}
// 									</Typography>
// 								</ListItem>
// 								<ListItem>
// 									<Button
// 										onClick={checkoutHandler}
// 										variant="contained"
// 										color="primary"
// 										fullWidth
// 									>
// 										Check Out
// 									</Button>
// 								</ListItem>
// 							</List>

// 							<List>
// 								<ListItem>
// 									{/* <Typography variant="h5">
// 										Continue Shopping
// 									</Typography> */}
// 								</ListItem>
// 								<ListItem>
// 									<Button
// 										onClick={() => dispatch(clearItems())}
// 										variant="contained"
// 										color="secondary"
// 										fullWidth
// 									>
// 										Clear Cart
// 									</Button>
// 								</ListItem>
// 							</List>
// 						</Card>
// 					</Grid>

// 				</Grid>
// 			)}
// 		</div>
// 		</div>

// 		</>
// 	);
// };

// export default Cart;
