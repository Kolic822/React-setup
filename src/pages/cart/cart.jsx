import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-Item";
import "./cart.css";

export const Cart = () => {
	const { cartItems } = useContext(ShopContext);
	return (
		<div className="cart">
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cartItems">
				{PRODUCTS.map((Product) => {
					if (cartItems[Product.id] !== 0) {
						return <CartItem key={Product.id} data={Product} />;
					}
				})}
			</div>
		</div>
	);
};
