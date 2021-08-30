import React, { useEffect } from "react";
// import {makeStyles} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
	Link,
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

	// useEffect(() => {
	// 	dispatch(listProducts());
	// }, [dispatch]);

	const remove = (product) => {
		dispatch(removeFromCart(product));
	};

	const checkoutHandler = () => {
		history.push("/checkout");
		// history.push('/auth?redirect=checkout');
	};

	

	//  onClick={checkoutHandler}

	return (
		<div style={{ minHeight: "100vh" }}>
			<SelectionNavbar />
			<Typography component="h3" variant="h3">
				Shopping Cart
			</Typography>
			{cartItems.length === 0 ? (
				<div>
					Cart is empty. <Link href="/seletionpage">Go shopping</Link>
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
										<TableCell align="right">Quantity</TableCell>
										<TableCell align="right">Price</TableCell>
										<TableCell align="right">Action</TableCell>
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
												<Link>
													<Typography>{item.name}</Typography>
												</Link>
											</TableCell>
											<TableCell align="right">
												{/* <Select value={item.quantity}>
													{[...Array(item.countInStock).keys()].map((x) => (
														<MenuItem key={x + 1} value={x + 1}>
															{x + 1}
														</MenuItem>
													))}
												</Select> */}

												{item.count}
											</TableCell>
											<TableCell align="right">${item.price}</TableCell>
											<TableCell align="right">
												<Button
													onClick={() => remove(item)}
													variant="contained"
													color="secondary"
												>
													x
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
										items) : $
										{cartItems.reduce((a, c) => a + c.count * c.price, 0)}
									</Typography>
								</ListItem>
								<ListItem>
									<Button
										onClick={checkoutHandler}
										variant="contained"
										color="primary"
										fullWidth
									>
										Check Out
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
