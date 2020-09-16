import React from "react";
import "./Product.css";

// Destructure product and pass product props
function Product({ title, image, price, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>The product...</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
			</div>

			<img src={image} alt="" />

			{/* <button onClick={addToBasket}>Add to Basket</button> */}
		</div>
	);
}

export default Product;
