import axios from "axios";

const Axios =  axios.create({
baseURL : import.meta.env.MODE === "DEV"? 'http://localhost:5000' : import.meta.env.BACKEND,
withCredentials : true,
})



export default Axios