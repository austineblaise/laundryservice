import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
// import About  from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import SelectionPage from "./components/SelectionPage/SelectionPage";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Testimonia from "./components/Testimonia/Testimonia";
import WhyUs from "./components/WhyUs/WhyUs";
import SelectionNavbar from "./components/SelectionNavbar/SelectionNavbar";
import CheckoutNav from "./components/CheckoutNav/CheckoutNav";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import DatePickers from "./components/DatePicker/DatePicker";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import OrderScreen from "./components/OrderScreen/OrderScreen";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Protected from "./components/Protected/Protected";
import ProtectedRoute from "./components/Protected/Protected";
import Successpage from "./components/SuccessPage/Successpage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
	const user = JSON.parse(localStorage.getItem("profile"));

	// const { state = {} } = this.props.location;
	// const { error } = state;

	return (
		<Router>
			<ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
			<div className="App">
				{/* {error &&  toast.error(`login first!!`, { position: "bottom-left" })} */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/navbar">
						<Navbar />
					</Route>

					<Route path="/jumbotron">
						<Jumbotron />
					</Route>

					<Route path="/about">
						<About />
					</Route>

					<Route path="/services">
						<Services />
					</Route>

					<Route path="/whyus">
						<WhyUs />
					</Route>

					<Route path="/feature">
						<Feature />
					</Route>

					<Route path="/gallery">
						<Portfolio />
					</Route>

					<Route path="/testimonia">
						<Testimonia />
					</Route>

					<Route path="/team">
						<Team />
					</Route>

					<Route path="/pricing">
						<Pricing />
					</Route>

					<Route path="/fag">
						<Faq />
					</Route>

					<Route path="/footer">
						<Footer />
					</Route>

					<Route path="/footer">
						<Footer />
					</Route>

					<Route path="/selectionpage">
						<SelectionPage />
					</Route>

					<Route path="/selectionnavbar">
						<SelectionNavbar />
					</Route>

					<Route path="/auth">
						<Auth />
					</Route>

					<Route path="/checkoutnav">
						<CheckoutNav />
					</Route>

					<Route path="/cart">
						<Cart />
					</Route>

					<PrivateRoute path="/checkout">
						<Checkout />
					</PrivateRoute>

					{/* <ProtectedRoute
						path="/checkout"
						Successpage
						// loggedIn={this.state.loggedIn}
						component={Checkout}
					/> */}
					{/* <Route exact path="/checkout">
						{!user ? <Redirect to="/auth" /> :<Checkout />}
					</Route> */}

					{/* <Route path="/checkout" exact component={() => (!user ? <Auth /> : <Redirect to="/checkout" />)} /> */}

					<Route path="/datepicker">
						<DatePickers />
					</Route>

					<PrivateRoute path="/placeorder">
						<PlaceOrder />
					</PrivateRoute>

					{/* <Route path="/placeorder">
						<PlaceOrder />
					</Route> */}

					<Route path="/filterbuttons">
						<FilterButtons />
					</Route>

					<Route path="/order/:id">
						<OrderScreen />
					</Route>


                    <PrivateRoute path="/success">
						<Successpage />
					</PrivateRoute>


					<Route>
						<PageNotFound />
					</Route>



					{/* FilterButtons */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
