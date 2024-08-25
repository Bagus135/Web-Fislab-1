import { useEffect, useState } from "react";
import Axios from "../../utils/axios";
import toast from "react-hot-toast";

const useGetAnnouncement = () => {
    const [Announcement, setAnnounnce] = useState<AnnounceTypeRes[]|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [trigger, setTrigger] = useState(false);

        const GetAnnouncement = async () => {
            try {
                setIsLoading(true)
                const res = await Axios.get(`/api/admin/info/all`).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setAnnounnce(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   

    useEffect(()=>{
        GetAnnouncement()
    },[trigger])

    return {Announcement ,isLoading, trigger, setTrigger}
}

export default useGetAnnouncement