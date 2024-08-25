import axios from "axios";

const Axios =  axios.create({
baseURL : import.meta.env.VITE_BACKEND,
withCredentials : true,
})



export default Axios