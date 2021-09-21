import React, { useState, useEffect } from "react";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Jumbotron from "../Jumbotron/Jumbotron";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonia from "../Testimonia/Testimonia";
import WhyUs from "../WhyUs/WhyUs";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import "./Home.css";

const Home = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		setTimeout(() =>{
           setLoading(false)
		}, 6000)
	}, [])
	return (
		<div>

			
			{
				loading?

				<div className="loader">

				<HashLoader color={"#3498db"} loading={loading} size={200} />

				</div>

				:

<>
			<Navbar />
			<Jumbotron />
			<About />
			<Services />
			<WhyUs />
			{/* <CallToAction /> */}
			<Feature />
			<Portfolio />
			<Testimonia />
			<Team />
			<Pricing />
			<Faq />
			<Footer />
			</>

			}
			
		</div>
	);
};

export default Home;
