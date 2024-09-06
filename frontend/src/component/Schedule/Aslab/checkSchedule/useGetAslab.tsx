import {useState } from "react";
import toast from "react-hot-toast";
import Axios from "../../../../utils/axios";

const useGetAslab = () => {
    const [aslab, setaslab] = useState<getJudulAslabRes|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const getAslab = async (id : string) =>{
            setIsLoading(true)
            try {
                const res = await Axios.get(`/api/profile/aslab/${id}`).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setaslab(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        return { aslab, isLoading, getAslab }
}

export default useGetAslab