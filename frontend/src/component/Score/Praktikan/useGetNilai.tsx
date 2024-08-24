import { useEffect, useState } from "react";
import Axios from "../../../utils/axios";

const useGetNilai = () => {
    const [nilai, setNilai] = useState<PraktikanScore | any>(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getNilai = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get(`/api/score/praktikan/`).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setNilai(res.data.payload as PraktikanScore);
            } catch (error: any) {
                console.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        getNilai()
    }, [])
    return { nilai, isLoading,  }
}

export default useGetNilai