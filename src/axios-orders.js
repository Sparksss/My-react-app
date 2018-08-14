import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-12341.firebaseio.com/"
});

export default instance;