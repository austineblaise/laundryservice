import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CheckoutNav from "../CheckoutNav/CheckoutNav";
import SelectionNavbar from "../SelectionNavbar/SelectionNavbar";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import {
	getProductDetails,
	listProducts,
} from "../../Redux/actions/productActions";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import SaveIcon from "@material-ui/icons/Save";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { green } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
	addToCart,
	reduceQuantity,
	removeFromCart,
} from "../../Redux/actions/addremovecart";

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	button: {
		margin: theme.spacing(1),
		marginBottom: "10em",
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		overflowY: "scroll",
		height: "90vh",
	},

	value: {
		width: "10rem",
	},

	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},

	title: {
		marginTop: theme.spacing(2),
	},
}));

const SelectionPage = ({ match }) => {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const classes = useStyles();
	// const [products, setProducts] = useState([]);
	// const [loading, setLoading] = useState([false]);
	// const [error, setError] = useState([false]);
	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	const addToCarto = (product) => {
		dispatch(addToCart(product));
	};

	const remove = (product) => {
		dispatch(removeFromCart(product));
	};

	// const reduceQTY = (product) => {
	// 	if (product <= 0) return;
	// 	dispatch(reduceQuantity(product));
	// };

	//removeFromCart
	//removeFromCartaus

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(  addToCart());
	// }, [dispatch]);

	return (
		<React.Fragment>
			<SelectionNavbar />

			<CssBaseline />

			{loading ? (
				<LoadingBox />
			) : (
				<Container maxWidth="sm">
					<Typography component="div" style={{ backgroundColor: "whiteSmoke" }}>
						<div>
							{/* <Typography variant="h6" gutterBottom>
						make your order
					</Typography> */}
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<List disablePadding>
										{products.map((product) => (
											<ListItem
												divider
												className={classes.listItem}
												key={product.name}
											>
												<ListItemAvatar>
													<Avatar>
														<ImageIcon />
													</Avatar>
												</ListItemAvatar>
												<ListItemText
													primary={product.name}
													secondary={product.price}
												/>

												<div className={classes.buttons}>
													{/* <Button variant="contained" size="small" color="primary">-</Button> */}
													{/* <IconButton> */}
													<Typography variant="body2">
														<Button
															variant="contained"
															color="secondary"
															size="small"
															// className={classes.button}
															// startIcon={<SaveIcon />}
															onClick={() => remove(product)}
															mb="50rem"
														>
															<DeleteForeverIcon color="danger" />
														</Button>
													</Typography>
													{/* </IconButton> */}

													<Typography className="count">
														{cartItems.count}
													</Typography>

													{/* <IconButton>
													<AddCircleIcon fontSize="large" color="primary"/>
													</IconButton> */}
												</div>
												<Typography variant="body2">
													<Button
														variant="contained"
														color="primary"
														size="small"
														// className={classes.button}
														// startIcon={<SaveIcon />}
														mb="50rem"
														onClick={() => addToCarto(product)}
													>
														<AddCircleIcon />
													</Button>
												</Typography>
											</ListItem>
										))}
										<ListItem className={classes.listItem}>
											<ListItemText primary="Total" />
											<Typography variant="subtitle1" className={classes.total}>
												$34.06
											</Typography>
										</ListItem>
									</List>
								</Paper>

								<div className={classes.buttons}>
									<Button className={classes.button}>Back</Button>

									<Button
										variant="contained"
										color="primary"
										className={classes.button}
									>
										Next
									</Button>
								</div>
							</Grid>
						</div>
					</Typography>
				</Container>
			)}
		</React.Fragment>
	);
};

export default SelectionPage;

// import React from 'react';
// import Footer from '../Footer/Footer';
// import SelectionNavbar from '../SelectionNavbar/SelectionNavbar';

// const SelectionPage = () => {
//     return (
//         <>
//         <SelectionNavbar/>
//         <div>
//             <h1>selectedPage</h1>
//         </div>
//           <Footer/>
//           <Footer/>
//         </>
//     )
// }

// export default SelectionPage
