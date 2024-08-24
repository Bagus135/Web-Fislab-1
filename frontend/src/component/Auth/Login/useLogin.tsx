import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useLogin = () =>{
    const[isLoading, setIsLoading] = useState<boolean>(false);
    const{setAuthUser} = useAuthContext();

    const login = async (nrp : string , password : string) =>{
        try {
            setIsLoading(true)
            const res =  await Axios.post('/api/auth/login', {
                nrp : nrp,
                password : password
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            setAuthUser(res.data.payload)
            toast.success(res.data.message)
        } catch (error:any){
            toast.error(error.message);
        } finally{
            setIsLoading(false)
        }
    }
    return {login, isLoading}
}

export default useLogin
