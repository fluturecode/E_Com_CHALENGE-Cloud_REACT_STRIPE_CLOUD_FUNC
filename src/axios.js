import axios from "axios";

const instance = axios.create({
	baseURL: "", // Cloud function URL
});

export default instance;
