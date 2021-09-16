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

import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./SelectionPage.css";
import { useHistory } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';

import Naira from "react-naira";

import {
	addToCart,
	reduceQuantity,
	removeFromCart,
} from "../../Redux/actions/addremovecart";
import FilterButtons from "../FilterButtons/FilterButtons";

const buttons = [
	{
		name: "All",
		value: "all",
	},
	{
		name: "Gentlemen",
		value: "gentlemen",
	},
	{
		name: " Ladies",
		value: "ladies",
	},
	{
		name: "Native",
		value: "native",
	},

	{
		name: "Others",
		value: "others",
	},
];

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(0.5),
	},
	extendedIcon: {
		marginRight: theme.spacing(0.5),
	},

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
	// const [quantity, setQuantity] = useState(1);
	let history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const productList = useSelector((state) => state.productList);

	const { loading, error, products, count } = productList;

	const [myValue, setValue] = useState("");

	const filterPokemon = (pokeType) => {
		let filtredPokemon = products.filter((type) => type.category === pokeType);
		return filtredPokemon;
	};

	const [filtredPokemon, setFiltredPokemon] = useState(null);

	const addToCarto = (product) => {
		dispatch(addToCart(product));
	};

	const remove = (product) => {
		dispatch(removeFromCart(product));
	};

	const handleClick = () => {
		history.push("/");
	};

	const handleCartClick = () => {
		history.push("/cart");
	};

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	useEffect(() => {
		setFiltredPokemon(products);
	}, [products]);

	const handlePokemon = (e) => {
		let typePokemon = e.target.value;
		typePokemon !== "all"
			? setFiltredPokemon(filterPokemon(typePokemon))
			: setFiltredPokemon(products);
	};

	// useEffect(() => {
	// 	dispatch(  addToCart());
	// dispatch(addToCart)
	// }, [dispatch]);

	return (
		<React.Fragment>
			<SelectionNavbar />
			{/* <FilterButtons products={products} items={items}  handlePokemon={ handlePokemon}/> */}

			{/* <button type="button" class="btn btn-primary btn-sm">Small button</button>
             <button type="button" class="btn btn-secondary btn-sm">Small button</button>
			 <button type="button" class="btn btn-primary btn-sm">Small button</button>
             <button type="button" class="btn btn-secondary btn-sm">Small button</button>
			 <button type="button" class="btn btn-primary btn-sm">Small button</button>
             <button type="button" class="btn btn-secondary btn-sm">Small button</button> */}

			{/* {buttons &&
				buttons.map((type, index) => (
					<>
						<button key={index} value={type.value} onClick={handlePokemon}>
							{type.name}
						</button>
					</>
				))} */}

			{loading ? (
				<LoadingBox align="center" />
			) : (
				<div className="back">
					{buttons &&
						buttons.map((type, index) => (
							<>
								{/* <button key={index} value={type.value} onClick={handlePokemon}>
							{type.name}
						</button> */}

								<button
									onClick={handlePokemon}
									value={type.value}
									// onChange = {(e) => setValue(type.value)}
									// variant="outlined"
									// size="small"
									// color="primary"
									// className={classes.margin}
									key={index}
									type="button"
									class="btn btn-outline-dark btn-sm mt-2 mb-2"
								>
									{type.name}
								</button>
							</>
						))}

					<CssBaseline />

					<Container maxWidth="sm">
						<Typography
							component="div"
							style={{ backgroundColor: "whiteSmoke" }}
						>
							<div>
								{/* <Typography variant="h6" gutterBottom>
						make your order
					</Typography> */}
								<Grid item xs={12}>
									<Paper className={classes.paper}>
										<List disablePadding>
											{filtredPokemon &&
												filtredPokemon.map((product) => (
													<ListItem
														divider
														className={classes.listItem}
														key={product._id}
													>
														<ListItemAvatar>
															<Avatar>
																<ImageIcon />
															</Avatar>
														</ListItemAvatar>
														<ListItemText
															primary={
																<Typography style={{ color: "#151E3D" }}>
																	{product.name}
																</Typography>
															}
															secondary={
																<Typography
																	style={{
																		color: "tomato",
																		fontFamily: "monospace",
																	}}
																>
																	<Naira>{product.price}</Naira>{" "}
																</Typography>
															}
														/>

														<div className={classes.buttons}>
															{/* <Button variant="contained" size="small" color="primary">-</Button> */}

															{/* <IconButton> */}
															{/* <Typography variant="body2">

														npm install --save react-naira

e


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
														</Typography> */}
															{/* </IconButton> */}

															<Typography className="count">
																{/* {count.cartItems.count}  */}
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
											{/* <ListItem className={classes.listItem}>
											<ListItemText primary="Total" />
											<Typography variant="subtitle1" className={classes.total}>
												$34.06
											</Typography>
										</ListItem> */}
										</List>
									</Paper>

									<div className={classes.buttons}>
										<Button className={classes.button} onClick={handleClick}>Home</Button>

										<Button
											variant="contained"
											color="primary"
											className={classes.button}
											onClick={handleCartClick}
										>
											Next
										</Button>
									</div>
								</Grid>
							</div>
						</Typography>
					</Container>
				</div>
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
