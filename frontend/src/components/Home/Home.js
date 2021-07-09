import React from 'react'
import About from '../About/About'
import Faq from '../Faq/Faq'
import Feature from '../Feature/Feature'
import Footer from '../Footer/Footer'
import Jumbotron from '../Jumbotron/Jumbotron'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Pricing from '../Pricing/Pricing'
import Services from '../Services/Services'
import Team from '../Team/Team'
import Testimonia from '../Testimonia/Testimonia'
import WhyUs from '../WhyUs/WhyUs'

const Home = () => {
    return (
        <div>
            <Navbar />
			<Jumbotron />
			<About/>
			<Services/>
			<WhyUs/>
			{/* <CallToAction /> */}
			<Feature/>
			<Portfolio/>
			<Testimonia/>
			<Team/>
			<Pricing/>
			<Faq/>
			<Footer/>
        </div>
    )
}

export default Home
