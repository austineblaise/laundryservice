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
	Paper,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import useStyles from "../AnotherStyle/Styles";

import LoadingBox from "../LoadingBox/LoadingBox";
import { getOrderDetails } from "../../Redux/actions/orderActions";
import MetaData from "../MetaData/MetaData";
import CheckoutWizard from "../CheckoutWizard/CheckoutWizard";
import "./OrderScreen.css";

function OrderScreen(props) {
	const orderId = props.match.params.id;
	const classes = useStyles();
	const dispatch = useDispatch();
	let history = useHistory();

	// const orderDetails = useSelector((state) => state.orderDetails)
	// const {order, loading, error} = orderDetails;
	// const toPrice = (num) => Number(num.toFixed(2));

	// const orderDetails = useSelector((state) => state.orderDetails);
	// const { order, loading, error } = orderDetails;

	const { loading, error, order = {} } = useSelector(
		(state) => state.orderDetails
	);
	const {
		// shippingInfo,
		orderItems,
		paymentInfo,
		user,
		totalPrice,
		orderStatus,
	} = order;


	const cart = useSelector((state) => state.cart);

	const { cartItems, shippingInfo} = cart;



// 	useEffect(() => {
// 		if(!orderItems){
// 			history.push("/checkout")
// 		}
//    }, [orderItems, history ]);


    // if (!shippingInfo) {
    //   history.push('/payment');
    // }
    // if (cartItems.length === 0) {
    //   history.push('/cart');
    // }
  


	useEffect(() => {
		dispatch(getOrderDetails(orderId));
	}, [dispatch, orderId]);

	

	// const shippingDetails = shippingInfo && `${shippingInfo.fullName}, ${shippingInfo.email}, ${shippingInfo.phoneNo}, ${shippingInfo.city}`

	return (
		// <>
		// 	<MetaData title={"Confirm Order"} />

		// 	<div className="back">
		// 	<CheckoutWizard activeStep={2} />

		// 	<div>
			
		// 		<Typography component="h4" variant="h4">
		// 			Place Order
		// 		</Typography>
		// 		<Grid container spacing={1}>
		// 			<Paper  elevation={3} >
		// 			<Grid item md={9} xs={12}>
		// 				<Card className={classes.section}>
		// 					<List>
		// 						<ListItem>
		// 							<Typography component="h4" variant="h4">
		// 								order {order && order._id}
		// 							</Typography>
		// 						</ListItem>
		// 						{/* <ListItem>
		// 						{order.order.shippingInfo && order.order.shippingInfo.fullName}, {order.order.shippingInfo && order.order.shippingInfo.email},{" "}
		// 						{order.order.shippingInfo && order.shippingInfo.phoneNo}, {order.shippingInfo && order.shippingInfo.address},{" "}
		// 						{order.shippingInfo && order.shippingInfo.city}
		// 					</ListItem> */}
		// 					</List>
		// 				</Card>
		// 				<Card className={classes.section}>
		// 					<List>
		// 						<ListItem>
		// 							<Typography component="h4" variant="h4">
		// 								Payment Method
		// 							</Typography>
		// 						</ListItem>
		// 						{/* <ListItem>address: {shippingDetails} </ListItem> */}
		// 					</List>
		// 				</Card>
		// 				<Card className={classes.section}>
		// 					<List>
		// 						<ListItem>
		// 							<Typography component="h4" variant="h4">
		// 								Order Items
		// 							</Typography>
		// 						</ListItem>
		// 						<ListItem>
		// 							<TableContainer>
		// 								<Table>
		// 									<TableHead>
		// 										<TableRow>
		// 											<TableCell>Image</TableCell>
		// 											<TableCell>Name</TableCell>
		// 											<TableCell align="right">Quantity</TableCell>
		// 											<TableCell align="right">Price</TableCell>
		// 										</TableRow>
		// 									</TableHead>
		// 									<TableBody>
		// 										{orderItems &&
		// 											orderItems.map((item) => (
		// 												<TableRow key={item._id}>
		// 													<TableCell>
		// 														{/* <NextLink href={`/product/${item.slug}`} passHref> */}
		// 														<Link>
		// 															<ListItemAvatar>
		// 																<Avatar>
		// 																	<ImageIcon />
		// 																</Avatar>
		// 															</ListItemAvatar>
		// 														</Link>
		// 														{/* </NextLink> */}
		// 													</TableCell>

		// 													<TableCell>
		// 														<Link>
		// 															<Typography>{item.name}</Typography>
		// 														</Link>
		// 													</TableCell>
		// 													<TableCell align="right">
		// 														<Typography>{item.count}</Typography>
		// 													</TableCell>
		// 													<TableCell align="right">
		// 														<Typography>${item.price}</Typography>
		// 													</TableCell>
		// 												</TableRow>
		// 											))}
		// 									</TableBody>
		// 								</Table>
		// 							</TableContainer>
		// 						</ListItem>
		// 					</List>
		// 				</Card>
		// 			</Grid>
					
					
		// 			</Paper>
					
		// 			<Grid item md={3} xs={12}>
		// 				<Card className={classes.section}>
		// 					<List>
		// 						<ListItem>
		// 							<Typography variant="h2">Order Summary</Typography>
		// 						</ListItem>
		// 						<ListItem>
		// 							<Grid container>
		// 								<Grid item xs={6}>
		// 									<Typography>Items:</Typography>
		// 								</Grid>
		// 								<Grid item xs={6}>
		// 									<Typography align="right">${order.itemsPrice}</Typography>
		// 								</Grid>
		// 							</Grid>
		// 						</ListItem>
		// 						<ListItem>
		// 							<Grid container>
		// 								<Grid item xs={6}>
		// 									<Typography>Tax:</Typography>
		// 								</Grid>
		// 								<Grid item xs={6}>
		// 									<Typography align="right">${order.taxPrice}</Typography>
		// 								</Grid>
		// 							</Grid>
		// 						</ListItem>
		// 						<ListItem>
		// 							<Grid container>
		// 								<Grid item xs={6}>
		// 									<Typography>Shipping:</Typography>
		// 								</Grid>
		// 								<Grid item xs={6}>
		// 									<Typography align="right">
		// 										${order.shippingPrice}
		// 									</Typography>
		// 								</Grid>
		// 							</Grid>
		// 						</ListItem>
		// 						<ListItem>
		// 							<Grid container>
		// 								<Grid item xs={6}>
		// 									<Typography>
		// 										<strong>Total:</strong>
		// 									</Typography>
		// 								</Grid>
		// 								<Grid item xs={6}>
		// 									<Typography align="right">
		// 										<strong>${order.totalPrice}</strong>
		// 									</Typography>
		// 								</Grid>
		// 							</Grid>
		// 						</ListItem>
		// 						<ListItem>
		// 							{/* <Button
		// 							// onClick={placeOrderHandler}
		// 							onClick={placeOrderHandler}
		// 							variant="contained"
		// 							color="primary"
		// 							fullWidth
		// 						>
		// 							Place Order
		// 						</Button>

		// 						{loading && <LoadingBox />}

		// 						{error && <div>{error}</div>} */}
		// 						</ListItem>
		// 						{/* {loading && (
		// 						<ListItem>
		// 							<CircularProgress />
		// 						</ListItem>
		// 					)} */}
		// 					</List>
		// 				</Card>
		// 			</Grid>
		// 		</Grid>
				
						
		// 	</div>
						
		// 	</div>
		//</>





<>
			<MetaData title={"Comfirm Order"} />

			<div style={{ minHeight: "100vh", overflowX: "hidden" }}>
		
				<Typography component="h4" variant="h4">
					My order
				</Typography>
				{orderItems === [] ? (
					<div>
						order is empty. <Link to="/selectionpage">Go shopping</Link>
					</div>
				) : (
					<Grid container spacing={1}>
		 			<Paper  elevation={3} >
		 			<Grid item md={9} xs={12}>
	 				<Card className={classes.section}>
							<List>
								<ListItem>
									<Typography component="h4" variant="h4">
		 								order {order && order._id}
		 							</Typography>
							</ListItem>
							{/* <ListItem>
		// 						{order.order.shippingInfo && order.order.shippingInfo.fullName}, {order.order.shippingInfo && order.order.shippingInfo.email},{" "}
		// 						{order.order.shippingInfo && order.shippingInfo.phoneNo}, {order.shippingInfo && order.shippingInfo.address},{" "}
		// 						{order.shippingInfo && order.shippingInfo.city}
		// 					</ListItem> */}
							</List>
						</Card>
						<Card className={classes.section}>
							<List>
						<ListItem>
									<Typography component="h4" variant="h4">
										Payment Method
									</Typography>
								</ListItem>
								{/* <ListItem>address: {shippingDetails} </ListItem> */}
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
												{orderItems &&
													orderItems.map((item) => (
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
					
					
					</Paper>
					
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
											<Typography align="right">${order.itemsPrice}</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<ListItem>
									<Grid container>
										<Grid item xs={6}>
											<Typography>Tax:</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography align="right">${order.taxPrice}</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<ListItem>
									<Grid container>
										<Grid item xs={6}>
											<Typography>Shipping:</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography align="right">
												${order.shippingPrice}
											</Typography>
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
												<strong>${order.totalPrice}</strong>
											</Typography>
										</Grid>
									</Grid>
								</ListItem>
								<ListItem>
									{/* <Button
									// onClick={placeOrderHandler}
									onClick={placeOrderHandler}
									variant="contained"
									color="primary"
									fullWidth
								>
									Place Order
								</Button>

								{loading && <LoadingBox />}

								{error && <div>{error}</div>} */}
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
		</>









	);
}

export default withRouter(OrderScreen);
