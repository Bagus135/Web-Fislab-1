import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

interface InputSchedule {
    date : undefined|string,
    hour : undefined|string,
}

const useAddAslabSchedule = () => {
    const [isLoading, setIsLoading] = useState(false);
        const addSchedule = async (dataId: AslabSchedule|null, payload:InputSchedule) => {
            setIsLoading(true)
            try {
                const res = await Axios.put(`/api/schedule/aslab/${dataId?.idJudulAslab}/${dataId?.kelompokId}`,{
                    date : payload.date,
                    hour : payload.hour,
                    no : dataId?.no
                }).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                toast.success(res.data.message)
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   

    return { addSchedule, isLoading }
}

export default useAddAslabSchedule