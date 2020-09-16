import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-NjVjMjgzNjYt-w1500._CB403919247_.jpg"
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Viotek GN34CW 34-Inch 21:9 Ultrawide Curved Gaming and Professional Computer Monitor"
						price={359.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71IDENSozKL._AC_SL1500_.jpg"
					/>
					<Product
						id="49538094"
						title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Silver"
						price={423.0}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81vNRgHlqGL._AC_SL1500_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
				</div>

				<div className="home__row">
					<Product
						id="49538094"
						title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers"
						price={45.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/719tjdoGaKL._AC_UL320_.jpg"
					/>
					<Product
						id="23445930"
						title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
						price={49.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
					/>
					<Product
						id="49538094"
						title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell | 128GB of Storage"
						price={799.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/71h1NfW14xL._AC_SX466_.jpg"
					/>
					<Product
						id="49538094"
						title="GROTE Jazz Electric Guitar Semi-Hollow Body Trapeze Tailpiece Bridge"
						price={219.0}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61UqFwD3xcL._AC_SX466_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Weber Original Kettle Premium Charcoal Grill, 22-Inch, Black"
						price={165.0}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71uQnSUmBFL._AC_SL1500_.jpg"
					/>
					<Product
						id="49538094"
						title="KitchenAid KSM150PSGA Artisan Series 5-Qt. Stand Mixer with Pouring Shield"
						price={329.95}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/7124M%2BqdOXL._AC_SL1500_.jpg"
					/>
					<Product
						id="90829332"
						title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners"
						price={99.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/81nUym12AOL._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
