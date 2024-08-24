import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useSignUp = () =>{
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUp = async(input:SignUpInputs) =>{
        try {
            setIsLoading(true);
            const res = await Axios.post('/api/auth/signup', input).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
        } catch (error:any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return{signUp, isLoading}
}

export default useSignUp