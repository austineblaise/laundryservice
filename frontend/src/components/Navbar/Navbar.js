import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import SidebarCard from "../SidebarCard/SidebarCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardHidden } from "../../Redux/actions/cardActions";
import CloseIcon from '@material-ui/icons/Close';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from "@material-ui/core";



const Navbar = () => {
  const dispatch = useDispatch();
  const hidecard = useSelector((state) => state.card);
  const { hidden } = hidecard;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", null);
  }, []);


    return (
       <>
      {/* <button
				onClick={() => dispatch(toggleCardHidden())}
				type="button"
				className="mobile-nav-toggle d-lg-none"
			>
				{!hidden ? (
					<i className="icofont-navigation-menu"></i>
				) : (
					<i className="icofont-close"></i>
				)}
			</button> */}





        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><a href="index.html">Vic</a></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Gallery</a></li>
        <li><a className="nav-link scrollto" href="#team">Team</a></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#footer">Contact</a></li>
      </ul>
      {/* <i className="bi bi-list mobile-nav-toggle" /> */}

      <button
				onClick={() => dispatch(toggleCardHidden())}
				type="button"
				className="mobile-nav-toggle d-lg-none"
			>
				{!hidden ? (
          
					<MenuIcon/>
        
				) : (
          <ClearIcon/>
				)}
			</button>


    </nav>{/* .navbar */}
    <div className="social-links">
      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
    </div>
  </div>

  {hidden && <SidebarCard />}
{/* {!hidden ? (
    <nav id="navbar" className="navbar order-last order-lg-0 navbar-mobile">
      <ul>
        <li>

          <a className="nav-link scrollto active" href="#hero"></a>
        </li>
      </ul>
    </nav>
  ): (  
   null
  )}  */}
</header>
</>

    )
}

export default Navbar
