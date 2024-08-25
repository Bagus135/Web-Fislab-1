import { useState } from 'react'
import Axios from '../../../utils/axios';
import toast from 'react-hot-toast';

const useResetFInalScore = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const resetScore = async () => {
        setIsLoading(true)
        try {
            const res = await Axios.delete(`/api/admin/allscore/reset`).catch((err : AxiosErr)=>{
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
        return {isLoading, resetScore}
}

export default useResetFInalScore