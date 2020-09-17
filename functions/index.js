// Build our Express server

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HPvUtB1fbBTGpJWkSVf0ntWMMaim8GhwDX22qTtLfV14ABqRtligdU56ONfNTwrrZin5uyt84tavq2s4DnW5v1n00ExUH768l"
);

// API

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total; // Amount in subunits

	console.log("Payment Request Receive for this amount >>>", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // Subunits of the currency
		currency: "usd",
	});
	// Ok - created a "payment intent"
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
// Listen Command
exports.api = functions.https.onRequest(app);

// Exampe Endpoint
// http://localhost:5001/e-commerce-site-1888f/us-central1/api
