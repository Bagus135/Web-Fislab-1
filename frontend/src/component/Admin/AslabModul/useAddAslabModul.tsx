import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useAddAslabModul = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addJudulAslab = async ( payload:any) => {
        setIsLoading(true)
        
        try {
            const res = await Axios.post(`/api/admin/judulaslab/${payload.uid}`, {
                kodeJudul : payload.kodeJudul,
                noJudul : payload.noJudul,
                Judul : payload.Judul,
                Aslab : payload.Aslab,
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

    return {addJudulAslab, isLoading }
}

export default useAddAslabModul