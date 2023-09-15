import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	return PRODUCTS.reduce((cart, product, index) => ({ ...cart, [index + 1]: 0 }), {});
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		return Object.keys(cartItems).reduce((totalAmount, item) => {
			if (cartItems[item] > 0) {
				const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				return totalAmount + cartItems[item] * itemInfo.price;
			}
			return totalAmount;
		}, 0);
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
