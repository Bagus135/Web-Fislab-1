import axios from "axios";

const Axios =  axios.create({
baseURL : import.meta.env.BACKEND,
withCredentials : true,
})



export default Axios