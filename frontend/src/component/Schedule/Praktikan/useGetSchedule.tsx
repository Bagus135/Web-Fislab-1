import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";

const useGetschedule = () => {
    const [schedule, setSchedule] = useState<any[]|null>(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getSchedule = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get('/api/schedule/praktikan').catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setSchedule(res.data.payload);
                console.log(res.data.payload)
            } finally {
                setIsLoading(false)
            }
        }   
        getSchedule()
    }, [])

    return { schedule, isLoading }
}

export default useGetschedule