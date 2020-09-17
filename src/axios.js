import axios from "axios";

const instance = axios.create({
	baseURL: "...", // Cloud function url
});

export default instance;
