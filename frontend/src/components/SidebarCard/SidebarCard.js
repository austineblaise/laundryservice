import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardHidden } from "../../Redux/actions/cardActions";

const SidebarCard = () => {
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
		<div>
			{hidden && (
				<div
					className="card"
					style={{
						width: "100vw",
						height: "auto",
						marginTop: "2.7rem",
						position: "absolute",
						display: " flex",
						flexDirection: "column",
						zIndex: "5",
						right: "0",
						
						// backgroundColor: "whitesmoke",
						lineHeight: 3,
						// justifyContent: "center",
						// alignItems: "center"
						
					}}
				>
					

					<div className="list-group">
						<Link
							href="/about"
							to="about"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							id="sidebar__link"
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							About
						</Link>
						<Link
							href="/services"
							to="services"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							Services
						</Link>

						<Link
							href="/why-us"
							to="why-us"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							Why Us
						</Link>
						{/* <Link
							href="/properties"
							to="properties"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							Gallery
						</Link> */}
						<Link
							href="/"
							to="team"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							Team
						</Link>
						<Link
						    href="/frequentlyasked"
							to="frequentlyasked"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							FrequentlyAsked
						</Link>
						
						<Link
						href="/contact"
						to="contact"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
							
							className="list-group-item list-group-item-action"
							onClick={() => dispatch(toggleCardHidden())}
						>
							Contact
						</Link>
						{/* <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" className="list-group-item list-group-item-action disabled" tabIndex={-1} aria-disabled="true">A disabled link item</a> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default SidebarCard;
