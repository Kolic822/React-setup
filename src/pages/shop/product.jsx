import React from "react";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
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
			<button>Add to cart</button>
		</div>
	);
};
