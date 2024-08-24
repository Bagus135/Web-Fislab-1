import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetAslabModul = () => {
    const [dataJudul, setdataJudul] = useState<JudulAslabRes[] | null>(null)
    const [trigger, setTrigger] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    
    const getAslabModul = async () => {
        setIsLoading(true)
        try {
            const res = await Axios.get(`/api/admin/judulaslab`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setdataJudul(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        } 

    useEffect(()=>{
    getAslabModul()  
    },[trigger])
        
        return { dataJudul, isLoading, setTrigger, trigger}
}

export default useGetAslabModul