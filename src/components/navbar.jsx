import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
	const { cartItems } = useContext(ShopContext);

	const sum = Object.values(cartItems).reduce((acc, curr) => {
		return acc + curr;
	}, 0);

	console.log("CartItems", cartItems);
	console.log("Sum", sum);

	return (
		<div className="navbar">
			<div className="links">
				<Link to="/">Shop</Link>
				<Link to="/cart">
					<ShoppingCart />
					{sum === 0 ? "" : sum}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
