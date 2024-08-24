import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

const useGetAslabSession = () => {
    const{authUser} = useAuthContext()
    const [AslabScoringList, setAslabScoringList] = useState<aslabScoringDetails[][]|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        const getNilai = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get(`/api/score/aslabsession/${authUser?.id}`).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setAslabScoringList(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        getNilai()
    }, [authUser?.id, trigger])
    return { AslabScoringList, isLoading, trigger, setTrigger}
}

export default useGetAslabSession