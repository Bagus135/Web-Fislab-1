import {useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useAddGroupPraktikan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addGroup = async ( payload:any) => {
        setIsLoading(true)
        try {
            const res = await Axios.post(`/api/admin/kelompok/praktikan/${payload.uid}`, {
                nrp : payload.nrp,
                nomor : payload.nomor,
                fullname : payload.fullname,
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

    return {addGroup, isLoading }
}

export default useAddGroupPraktikan