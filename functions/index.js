// Build our Express server
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// Use Stripe "Secret" key
const stripe = require("stripe")(
	"sk_test_51HPvUtB1fbBTGpJWkSVf0ntWMMaim8GhwDX22qTtLfV14ABqRtligdU56ONfNTwrrZin5uyt84tavq2s4DnW5v1n00ExUH768l"
);

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Listen Command
exports.api = functions.https.onRequest(app);
