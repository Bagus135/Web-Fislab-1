import axios from "axios";

const Axios =  axios.create({
baseURL : 'https://web-fislab-1.vercel.app/',
withCredentials : true,
})



export default Axios