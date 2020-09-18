import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/e-commerce-site-1888f/us-central1/api", // Cloud function URL
});

export default instance;
