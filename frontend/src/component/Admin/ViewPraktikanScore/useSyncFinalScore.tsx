import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useSyncFinalScore = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const syncScore = async (data : any[]) => {
        setIsLoading(true)
        try {
            const res = await Axios.put(`/api/admin/allscore/sync`, {
                data : data
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                toast.success(res.data.message)
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        } 
        return {isLoading, syncScore}
}

export default useSyncFinalScore