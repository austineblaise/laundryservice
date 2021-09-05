import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { saveShippingInfo } from "../../Redux/actions/addremovecart";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import DatePickers from "../DatePicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import CheckoutWizard from "../CheckoutWizard/CheckoutWizard";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	when: {
		justifyContent: "spaceAround",
		display: "flex",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},

	field: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		// margin: theme.spacing(3, 0, 2),
		// width: 220,
		// color: 'blue,

		// width: 400,
		height: 80,
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
		// backgroundColor: 'pink',
	},

	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

const Checkout = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	let history = useHistory();

    const userSignin = useSelector((state) => state.auth);

    const {  authData } = userSignin;


	const { shippingInfo } = useSelector((state) => state.cart);

	const [collectionDate, setCollectionDate] = useState(shippingInfo?.collectionDate);
	const [fullName, setFullName] = useState(shippingInfo?.fullName);
	const [email, setEmail] = useState(shippingInfo?.email);
	const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo);
	const [address, setAddress] = useState(shippingInfo?.address);
	const [city, setCity] = useState(shippingInfo?.city);



	// if(!authData ) {
	// 	history.push('/auth');
	//   }

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingInfo({ collectionDate,fullName, email, phoneNo, address, city }));
		history.push("/placeorder");
	};
	   
	
	
	// const handleChange = (e) => {
	//   setCollectionDate(e.target.value)
      
	// }

	return (
		<Container component="main" maxWidth="xs">
			<CheckoutWizard activeStep={1} />
			<CssBaseline />
			<div className={classes.paper}>
				{/* <Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Shipping
				</Typography> */}
				<form className={classes.form} onSubmit={submitHandler} noValidate>
					<Grid container spacing={2}>
						{/* <DatePickers handleChange={handleChange} /> */}

						<Grid item xs={12}>
							<TextField
							
								id="collectionDate"
								label="When would you like your pickup?"
								type="datetime-local"
								// defaultValue="2017-05-24T10:30"
								className={classes.field}
							
								InputLabelProps={{
									shrink: true,
								}}

								onChange={(e) => setCollectionDate(e.target.value)}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
							    
								autoComplete="fname"
								name="fullName"
								// variant="outlined"
								required
								fullWidth
								id="fullName"
								label="Full Name"
								onChange={(e) => setFullName(e.target.value)}
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								// variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								// variant="outlined"
								required
								fullWidth
								name="phoneNo"
								label="Phone Number"
								type="number"
								id="phoneNo"
								onChange={(e) => setPhoneNo(e.target.value)}
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								// variant="outlined"
								required
								fullWidth
								name="Address"
								label="Address"
								id="Address"
								onChange={(e) => setAddress(e.target.value)}
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								// variant="outlined"
								required
								fullWidth
								name="city"
								label="City"
								id="city"
								onChange={(e) => setCity(e.target.value)}
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							{/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Continue
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item></Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default Checkout;
