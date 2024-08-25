import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useDeletePraktikan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteGroup = async ( uid:string) => {
        setIsLoading(true)
        try {
            const res = await Axios.delete(`/api/admin/kelompok/praktikan/${uid}`).catch((err : AxiosErr)=>{
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

    return {deleteGroup, isLoading }
}

export default useDeletePraktikan