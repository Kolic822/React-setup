import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => (
	<div className="navbar">
		<div className="links">
			<Link to="/">Shop</Link>
			<Link to="/cart">
				<ShoppingCart />
			</Link>
		</div>
	</div>
);

export default Navbar;
