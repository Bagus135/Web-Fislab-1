import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetAllGroupPraktikan = () => {
    const [dataGroup, setDataGroup] = useState<PraktikanGroupRes[] | null>(null)
    const [trigger, setTrigger] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    
    const getGroup = async () => {
        setIsLoading(true)
        try {
            const res = await Axios.get(`/api/admin/kelompok/praktikan`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setDataGroup(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        } 

    useEffect(()=>{
    getGroup()  
    },[trigger])
        
        return { dataGroup, isLoading, setTrigger, trigger}
}

export default useGetAllGroupPraktikan