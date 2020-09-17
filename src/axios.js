import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/e-commerce-site-1888f/us-central1/api",
});

export default instance;
