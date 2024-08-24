import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetAslabSession = () => {
    const [SessionAslab, setSessionAslab] = useState<AslabSessionRes[] | null>(null)
    const [trigger, setTrigger] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    
    const getAslabModul = async () => {
        setIsLoading(true)
        try {
            const res = await Axios.get(`/api/admin/weekschedule`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setSessionAslab(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        } 

    useEffect(()=>{
    getAslabModul()  
    },[trigger])
        
        return { SessionAslab, isLoading, setTrigger, trigger}
}

export default useGetAslabSession