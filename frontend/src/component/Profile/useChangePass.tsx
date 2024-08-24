import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../../utils/axios";

const useChangePass = () =>{
    const[isLoading, setIsLoading] = useState<boolean>(false);

    const changePass = async (newPass : string , password : string, uid:string) =>{
        try {
            setIsLoading(true)
            const res =  await Axios.put(`/api/auth/password/${uid}`, {
                newPassword : newPass,
                password : password
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            (document.getElementById(`ModalChangePass`) as HTMLDialogElement).close()
        } catch (error:any){
            toast.error(error.message);
        } finally{
            setIsLoading(false)
        }
    }
    return {changePass, isLoading}
}

export default useChangePass