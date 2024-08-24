import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useLogout = () =>{
    const[isLoading, setIsLoading] = useState<boolean>(false);
    const{setAuthUser} = useAuthContext();

    const logout = async () =>{
        try {
            setIsLoading(true)
            const res =  await Axios.post('/api/auth/logout').catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
            setAuthUser(null)
        } catch (error:any){
            toast.error(error.message);
        } finally{
            setIsLoading(false)
        }
    }
    return {logout, isLoading}
}

export default useLogout
