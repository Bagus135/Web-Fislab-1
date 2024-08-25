import axios from "axios";

const Axios =  axios.create({
baseURL : import.meta.env.API_URL,
withCredentials : true,
})



export default Axios