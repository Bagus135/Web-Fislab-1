import { useState } from "react"
import toast from "react-hot-toast";
import Axios from "../../../utils/axios";

const useChangeRole = ()=>{
    const [loading, setLoading] = useState(false);
    const changeRole = async (uid : string|undefined, role : number )=>{
        try {
            setLoading(true)
            const res = await Axios.put(`/api/master/role/${uid}`, {
                role
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
        } catch (error:any) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }
    return {loading, changeRole}
}

export default useChangeRole