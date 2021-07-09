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
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CheckoutNav from "../CheckoutNav/CheckoutNav";
import SelectionNavbar from "../SelectionNavbar/SelectionNavbar";
 
// const products = [
// 	{ name: "Pijamas", desc: "A nice thing", price: "$9.99" },
// 	{ name: "partened shirts", desc: "Another thing", price: "$3.45" },
// 	{ name: "shorts", desc: "Something else", price: "$6.51" },
// 	{ name: "Long trousers", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Long short", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Long sleeves", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Long tame", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Long trouser", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Long tire", desc: "Best thing of all", price: "$14.11" },
// 	{ name: "Shipping", desc: "", price: "Free" },
// ];

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		overflowY: "scroll",
		height: "90vh",
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

const SelectionPage = () => {
	const classes = useStyles();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState([false]);
	const [error, setError] = useState([false]);

	useEffect(() => {
		const fetchData = async () => {
			try{
				setLoading(true);
			const { data } = await axios.get("/api/products");
			setLoading(false);
			setProducts(data);
			} catch(err){
				setError(err.message);
				setLoading(false);
			}
			
		};
		fetchData();
	}, []);

	return (
		<React.Fragment>
			<SelectionNavbar />
			
			<CssBaseline />

			{loading? (<LoadingBox></LoadingBox>)
			:
			error? (<MessageBox>{error}</MessageBox>)
			:<Container maxWidth="sm">
			<Typography component="div" style={{ backgroundColor: "whiteSmoke" }}>
				<div>
					{/* <Typography variant="h6" gutterBottom>
						make your order
					</Typography> */}
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<List disablePadding>
								{products.map((product) => (
									<ListItem className={classes.listItem} key={product.name}>
										<ListItemText
											primary={product.name}
											secondary={product.price}
										/>
										<Typography variant="body2">
											<IconButton>
												<AddCircleIcon color="primary" />
											</IconButton>
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
		}
			
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
