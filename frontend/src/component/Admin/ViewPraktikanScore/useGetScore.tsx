import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetScore = () => {
    const [dataScores, setdataScores] = useState<getViewScoreAdmin[] | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    
    const getScores = async () => {
        setIsLoading(true)
        try {
            const res = await Axios.get(`/api/admin/viewscore`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setdataScores(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        } 

    useEffect(()=>{
    getScores()  
    },[])
        
        return { dataScores, isLoading}
}

export default useGetScore