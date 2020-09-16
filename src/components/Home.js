import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Viotek GN34CW 34-Inch 21:9 Ultrawide Curved Gaming and Professional Computer Monitor, 100Hz 1440p, FreeSync FTS/RTS VESA (White)"
						price={359.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71IDENSozKL._AC_SL1500_.jpg"
					/>
					<Product
						id="49538094"
						title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
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
						title="Samsonite Omni PC Hardside Expandable Luggage with Spinner Wheels, Black, Checked-Large 28-Inch"
						price={109.0}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/91%2B6y0QIVEL._AC_SY450_.jpg"
					/>
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="49538094"
						title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Black"
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
						title="KitchenAid KSM150PSGA Artisan Series 5-Qt. Stand Mixer with Pouring Shield"
						price={329.95}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/7124M%2BqdOXL._AC_SL1500_.jpg"
					/>
					<Product
						id="23445930"
						title="AmazonBasics Non-Stick Cookware Set, Pots, Pans and Utensils - 15-Piece Set"
						price={51.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61x-NhdKBmL._AC_SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
