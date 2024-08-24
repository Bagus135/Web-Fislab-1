import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../../../../utils/axios";

const useGetAllSchedule = () => {
    const [allSchedule, setAllSchedule] = useState<getAllAslabSchedule[]|null>(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllSchedule = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get('/api/schedule/aslab/all').catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setAllSchedule(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        getAllSchedule()
    }, [])

    return { allSchedule, isLoading }
}

export default useGetAllSchedule