import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { CloudSlash } from "phosphor-react";

export const ShopContext = createContext(null);

// Set everything to 0
const getDefaultCart = () => {
	const cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};