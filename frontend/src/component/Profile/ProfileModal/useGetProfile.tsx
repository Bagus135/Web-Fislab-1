import {useState } from "react";
import toast from "react-hot-toast";
import Axios from "../../../utils/axios";

const useGetProfile = () => {
    const [Profile, setProfile] = useState<ProfileTypes|null>(null)
    const [isLoading, setIsLoading] = useState(false);
    
        const getProfile = async (id:string) => {
            try {
                setIsLoading(true)
                const res = await Axios.get(`/api/profile/user/${id}`).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setProfile(res.data.payload);
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
    return { getProfile, Profile, isLoading }
}

export default useGetProfile