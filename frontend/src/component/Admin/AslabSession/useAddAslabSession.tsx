import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useAddAslabSession = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addAslabSession = async ( payload:any) => {
        setIsLoading(true)
        try {
            const res = await Axios.post(`/api/admin/weekschedule/${payload.idJudulAslab}`, {
                nomorKel : payload.nomorKel,
                week : payload.week,
                noJudul : payload.noJudul,
                aslabId : payload.aslabId,
                aslab : payload.aslab,
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   

    return {addAslabSession, isLoading }
}

export default useAddAslabSession