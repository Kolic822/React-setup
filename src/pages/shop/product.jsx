import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemAmount = cartItems[id];

	return (
		<div className="product">
			<img src={productImage} />

			<div className="description">
				<p>
					<b>{productName}</b>
				</p>
				<span>{price}</span>
				<span> €</span>
			</div>
			<button className="addToCartBttn" onClick={() => addToCart(id)}>
				Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
			</button>
		</div>
	);
};
