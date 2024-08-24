import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetschedule = () => {
    const [schedule, setSchedule] = useState<AslabSchedule[]|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const[trigger, setTrigger] = useState(false)

    useEffect(() => {
        const getNilai = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get('/api/schedule/aslab').catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setSchedule(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        getNilai()
    }, [trigger])

    return { schedule, isLoading, trigger, setTrigger}
}

export default useGetschedule