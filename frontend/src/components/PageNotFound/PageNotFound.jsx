import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div className="hb">
			

			<div className="bd">
				<div className="mars" />
				<img
					src="https://assets.codepen.io/1538474/404.svg"
					alt="..."
					className="logo-404"
				/>
				<img
					src="https://assets.codepen.io/1538474/meteor.svg"
					alt="..."
					className="meteor"
				/>
				<p className="titl">Oh no!! this  isn't LaundryMaster's Page</p>
				<p className="subtitle">
					You’re either misspelling the URL <br /> or requesting a page that's
					no longer here.
				</p>
				<div align="center">
					<Link className="btn-back" to="/">
					please go back Home
					</Link>
				</div>
				<img
					src="https://assets.codepen.io/1538474/astronaut.svg"
					alt="..."
					className="astronaut"
				/>
				<img
					src="https://assets.codepen.io/1538474/spaceship.svg"
					alt="..."
					className="spaceship"
				/>
			</div>
		</div>
	);
}

export default PageNotFound;
