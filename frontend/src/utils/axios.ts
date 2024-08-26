import axios from "axios";

const Axios =  axios.create({
baseURL : import.meta.env.MODE === "development"? 'http://localhost:5000' : import.meta.env.VITE_BACKEND,
withCredentials : true,
})



export default Axios