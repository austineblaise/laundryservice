import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { Link } from "react-router-dom";
import {
	Grid,
	TableContainer,
	Table,
	Typography,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	// Link,
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
import {
	CLEAR_ORDER,
	ORDER_CREATE_RESET,
} from "../../Redux/constants/orderConstants";
import LoadingBox from "../LoadingBox/LoadingBox";
import MetaData from "../MetaData/MetaData";
import "./PlaceOrder.css";
import Naira from "react-naira";
import moment from "moment";
import SimpleDateTime  from 'react-simple-timestamp-to-date';


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
	// const shippingPrice = itemsPrice > 200 ? 0 : 15;
	// const taxPrice = round2(itemsPrice * 0.15);
	const totalPrice = round2(itemsPrice);

	const placeOrderHandler = () => {
		dispatch(createOrder({ ...cart, orderItems: cart.cartItems, totalPrice }));
		history.push("/success");
	};

	// const handleClick = () => {
	// 	history.push("/success");
	// };

	// useEffect(() => {
	// 	// if (!paymentMethod) {
	// 	//   history.push('/payment');
	//if
	// 	// }
	// 	if (cartItems.length === 0) {
	// 		history.push("/cart");
	// 	}
	// }, [dispatch, cartItems.length, history]);

	//

	return (
		<div className="back">
			<CheckoutWizard activeStep={2} />
			<MetaData title={"Comfirm Order"} />
		
			{/* <CheckoutWizard activeStep={3}></CheckoutWizard> */}

			<Typography component="h4" variant="h4">
				Your Order
			</Typography>

			{cartItems.length === 0 ? (
				<div>
					order is empty. <Link to="/selectionpage">Go shopping</Link>
				</div>
			) : (
				
			
				
				<Grid container spacing={1}>
				
					{/* <Typography component="h4" variant="h4">
						Place Order
					</Typography> */}

					<Grid item md={9} xs={12}>
						<Card className={classes.section}>
							<List>
								<ListItem>
									<Typography component="h5" variant="h5">
										Shipping Address
									</Typography>
								</ListItem>
								<ListItem>
								Date for Pick Up: <span style={{ marginLeft: '0.3rem', color: "blue" }}><SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{shippingInfo.collectionDate}</SimpleDateTime></span>
								
								{/* <SimpleDateTime dateSeparator="-" format="MYD" timeSeparator=":" meridians="1">{'2020-04-19 22:03:44'}</SimpleDateTime> */}
									
								</ListItem>
								{/* //style={{ color: "#151E3D" }} */}
								<ListItem>Full Name: <span style={{ marginLeft: '0.3rem', color: "blue" }}>{shippingInfo.fullName}</span></ListItem>
								<ListItem>Email: <span style={{ marginLeft: '0.3rem', color: "blue" }}>{shippingInfo.email}</span></ListItem>
								<ListItem>Phone Number:<span style={{ marginLeft: '0.3rem', color: "blue" }}> {shippingInfo.phoneNo} </span></ListItem>
								<ListItem>Address: <span style={{ marginLeft: '0.3rem', color: "blue" }}>{shippingInfo.address}, {shippingInfo.city}</span></ListItem>
							</List>
						</Card>
						<Card className={classes.section}>
							<List>
								<ListItem>
									<Typography component="h6" variant="h6">
									Order ID: <span style={{ color: "rgb(5, 5, 54)", fontFamily: "monospace" }}> {cartItems[0]._id}</span>
									</Typography>
								</ListItem>
								{/* <ListItem>PAYSTACK</ListItem> */}
							</List>
						</Card>
						<Card className={classes.section}>
							<List>
								{/* <ListItem>
									<Typography component="h6" variant="h6">
										Order Items {cartItems[0]._id}
									</Typography>
								</ListItem> */}
								<ListItem>
									<TableContainer>
										<Table>
											<TableHead>
												<TableRow>
													<TableCell>-----</TableCell>
													<TableCell>Name</TableCell>
													<TableCell align="center">Quantity</TableCell>
													<TableCell align="center">Price</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{cartItems.map((item) => (
													<TableRow key={item._id}>
														<TableCell>
															{/* <NextLink href={`/product/${item.slug}`} passHref> */}
															
																<ListItemAvatar>
																	<Avatar>
																		<ImageIcon />
																	</Avatar>
																</ListItemAvatar>
															
															{/* </NextLink> */}
														</TableCell>

														<TableCell>
															
																<Typography  style={{ color: "#151E3D" }}>{item.name}</Typography>
															
														</TableCell>
														<TableCell align="center">
															<Typography>{item.count}</Typography>
														</TableCell>
														<TableCell align="center">
															<Typography style={{
																			color: "tomato",
																			fontFamily: "monospace",
																		}}><Naira>{item.price}</Naira></Typography>
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
									<Typography variant="h5">Order Summary</Typography>
								</ListItem>
								<ListItem>
									<Grid container>
										<Grid item xs={6}>
											<Typography>Items:</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography align="right"><strong>{cartItems.reduce((a, c) => a + c.count, 0)}</strong></Typography>
										</Grid>
									</Grid>
								</ListItem>
								{/* <ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Tax:</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">${taxPrice}</Typography>
									</Grid>
								</Grid>
							</ListItem> */}
								{/* <ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Shipping:</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography align="right">${shippingPrice}</Typography>
									</Grid>
								</Grid>
							</ListItem> */}
								<ListItem>
									<Grid container>
										<Grid item xs={6}>
											<Typography>
												<strong>Total:</strong>
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography align="right">
												<strong><Naira>{totalPrice}</Naira></strong>
											</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<ListItem>
									<Button
										// onClick={placeOrderHandler}
										onClick={placeOrderHandler}
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
			)}
		</div>
	);
}

export default PlaceOrder;
