import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Icon from "./icon";
// import { signin, signup } from "../../actions/auth";
// import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import { AUTH } from "../../Redux/constants/cardConstant";
import { signin, signup } from "../../Redux/actions/authAction";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";
// import Typography from "@material-ui/core/Typography";
import Fade from 'react-reveal/Zoom';


import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	useLocation
  } from 'react-router-dom'
import MetaData from "../MetaData/MetaData";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//   const useStyles = makeStyles((theme) => ({
// 	root: {
// 	  width: '100%',
// 	  '& > * + *': {
// 		marginTop: theme.spacing(2),
// 	  },
// 	},
//   }));

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const userRegister = useSelector((state) => state.auth);
	const { authData, loading, error } = userRegister;


	const { state } = useLocation()
	const user = JSON.parse(localStorage.getItem("profile"));


	if (user) {
		return <Redirect to={state?.from || '/selectionpage'} />
	  }

	// const userSignin = useSelector((state) => state.auth);

	// const { authData } = userSignin;

    // 
     
	

	// useEffect(() => {
	// 	if (authData) {
	// 	  history.push(redirect);
	// 	}
	//   }, [redirect, authData, history]);

	const switchMode = () => {
		setForm(initialState);
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			dispatch(signup(form, history));
		} else {
			dispatch(signin(form, history));
		}

		

		
		
		// history.push(redirect);
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: AUTH, data: { result, token } });
			// history.push(redirect || '/selection');
			toast.success("You have successfully signed in!!!", { position: "top-left" });
		} catch (error) {
			console.log(error);
			// <Alert severity="error">{error}</Alert>
		}
	};

	const googleError = () =>
		// alert("Google Sign In was unsuccessful. Try again later");
		toast.error("Google Sign In was unsuccessful. Try again later", { position: "top-left" });

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });



	// const successToast = () => {
	// 	toast("success custom Toast", {
	// 		className: "custom-toast",
	// 		draggable: true,
	// 		position: toast.POSITION.BOTTOM_CENTER,
	// 	});
	// };

	return (
		<>
		<MetaData title={"signIn/signUp"} />
		<div className="back" >
			<Fade left cascade>
			{/* <ToastContainer draggable={false} transition={Zoom} autoClose={8000} /> */}
			<Container component="main" maxWidth="xs" >
				<Paper className={classes.paper} elevation={3}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{isSignup ? "Sign up" : "Sign in" }
					</Typography>

					{error && (
						<>
							{/* toast({error}, {
							   className: "error-toast",
							   draggable: true,
							   position: toast.POSITION.TOP_CENTER

						
						   }) */}

							{/* toast.error({error}) */}

							<div>{error}</div>
						</>
					)}
					<form className={classes.form} onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{isSignup && (
								<>
									<Input
										name="firstName"
										label="First Name"
										handleChange={handleChange}
										autoFocus
										half
									/>
									<Input
										name="lastName"
										label="Last Name"
										handleChange={handleChange}
										half
									/>
								</>
							)}
							<Input
								name="email"
								label="Email Address"
								handleChange={handleChange}
								type="email"
							/>
							<Input
								name="password"
								label="Password"
								handleChange={handleChange}
								type={showPassword ? "text" : "password"}
								handleShowPassword={handleShowPassword}
							/>
							{isSignup && (
								<Input
									name="confirmPassword"
									label="Repeat Password"
									handleChange={handleChange}
									type="password"
								/>
							)}
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{isSignup ? "Sign Up" : "Sign In"}
						</Button>
						<GoogleLogin
							clientId="683070606851-kmo0o3ct2b8gj4v3ipr6bhgu12km809c.apps.googleusercontent.com"
							render={(renderProps) => (
								<Button
									className={classes.googleButton}
									color="primary"
									fullWidth
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									startIcon={<Icon />}
									variant="contained"
								>
									Google Sign In
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleError}
							cookiePolicy="single_host_origin"
						/>
						<Grid container justify="flex-end">
							<Grid item>
								<Button onClick={switchMode}>
									{isSignup
										? <Typography >Already have an account? <span className="bl">Sign in</span></Typography> 
										: <Typography >Don't have an account? <span  className="bl">Sign Up</span> </Typography>}
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</Container>

			</Fade>
			</div>
		</>
	);
};

export default SignUp;
