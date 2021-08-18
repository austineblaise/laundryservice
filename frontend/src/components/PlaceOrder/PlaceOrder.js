import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import {
	Grid,
	TableContainer,
	Table,
	Typography,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Link,
	CircularProgress,
	Button,
	Card,
	List,
	ListItem,
} from "@material-ui/core";
import axios from "axios";
// import { useRouter } from "next/router";
import useStyles from "../AnotherStyle/Styles";
// import useStyles from ".."
import CheckoutWizard from "../CheckoutWizard/CheckoutWizard";
import { createOrder } from "../../Redux/actions/orderActions";
import { ORDER_CREATE_RESET } from "../../Redux/constants/orderConstants";
import LoadingBox from "../LoadingBox/LoadingBox";

function PlaceOrder() {
	const classes = useStyles();
	const dispatch = useDispatch();
	let history = useHistory();

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	const { shippingInfo } = useSelector((state) => state.cart);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { loading, success, error, order } = orderCreate;

	//   const {
	//     userInfo,
	//     cart: { cartItems, shippingAddress, paymentMethod },
	//   } = state;

	const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
	const itemsPrice = round2(
		cartItems.reduce((a, c) => a + c.price * c.count, 0)
	);
	const shippingPrice = itemsPrice > 200 ? 0 : 15;
	const taxPrice = round2(itemsPrice * 0.15);
	const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

	const placeOrderHandler = () => {
		dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
	};

	// useEffect(() => {
	// 	// if (!paymentMethod) {
	// 	//   history.push('/payment');
	// 	// }
	// 	if (cartItems.length === 0) {
	// 		history.push("/cart");
	// 	}
	// }, [dispatch, cartItems.length, history]);

	useEffect(() => {
		if (success) {
			// history.push(`/order/${order._id}`);
			history.push('/cart');
			dispatch(createOrder({ type: ORDER_CREATE_RESET }));
		}
	}, [dispatch,  history, success, order]);
	
	return (
		<div>
			<CheckoutWizard activeStep={2} />
			{/* <CheckoutWizard activeStep={3}></CheckoutWizard> */}
			<Typography component="h4" variant="h4">
				Place Order
			</Typography>

			<Grid container spacing={1}>
				<Grid item md={9} xs={12}>
					<Card className={classes.section}>
						<List>
							<ListItem>
								<Typography component="h4" variant="h4">
									Shipping Address
								</Typography>
							</ListItem>
							<ListItem>
								{shippingInfo.fullName}, {shippingInfo.email},{" "}
								{shippingInfo.phoneNo}, {shippingInfo.address},{" "}
								{shippingInfo.city}
							</ListItem>
						</List>
					</Card>
					<Card className={classes.section}>
						<List>
							<ListItem>
								<Typography component="h4" variant="h4">
									Payment Method
								</Typography>
							</ListItem>
							<ListItem>PAYSTACK</ListItem>
						</List>
					</Card>
					<Card className={classes.section}>
						<List>
							<ListItem>
								<Typography component="h4" variant="h4">
									Order Items
								</Typography>
							</ListItem>
							<ListItem>
								<TableContainer>
									<Table>
										<TableHead>
											<TableRow>
												<TableCell>Image</TableCell>
												<TableCell>Name</TableCell>
												<TableCell align="right">Quantity</TableCell>
												<TableCell align="right">Price</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{cartItems.map((item) => (
												<TableRow key={item._id}>
													<TableCell>
														{/* <NextLink href={`/product/${item.slug}`} passHref> */}
														<Link>
															<ListItemAvatar>
																<Avatar>
																	<ImageIcon />
																</Avatar>
															</ListItemAvatar>
														</Link>
														{/* </NextLink> */}
													</TableCell>

													<TableCell>
														<Link>
															<Typography>{item.name}</Typography>
														</Link>
													</TableCell>
													<TableCell align="right">
														<Typography>{item.count}</Typography>
													</TableCell>
													<TableCell align="right">
														<Typography>${item.price}</Typography>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</ListItem>
						</List>
					</Card>
				</Grid>
				<Grid item md={3} xs={12}>
					<Card className={classes.section}>
						<List>
							<ListItem>
								<Typography variant="h2">Order Summary</Typography>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Items:</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">${itemsPrice}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Tax:</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">${taxPrice}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Shipping:</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">${shippingPrice}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>
											<strong>Total:</strong>
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">
											<strong>${totalPrice}</strong>
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button
									// onClick={placeOrderHandler}
									onClick={placeOrderHandler }
									variant="contained"
									color="primary"
									fullWidth
								>
									Place Order
								</Button>

								{loading && <LoadingBox />}

								{error && <div>{error}</div>}
							</ListItem>
							{/* {loading && (
								<ListItem>
									<CircularProgress />
								</ListItem>
							)} */}
						</List>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default PlaceOrder;
