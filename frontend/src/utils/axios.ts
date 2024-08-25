import axios from "axios";

const Axios =  axios.create({
baseURL : process.env.BACKEND,
withCredentials : true,
})



export default Axios