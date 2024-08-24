import { useEffect, useState } from "react";
import Axios from "../../utils/axios";

const useGetUsers = () => {
    const [users, setUsers] = useState<AllUsers[] | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true)
            try {
                const res = await Axios.get('/api/profile/user').catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                setUsers(res.data.payload);
            } catch (error: any) {
                console.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
        getUsers()
    }, [trigger]) 

    return { users, isLoading, setTrigger, trigger}
}

export default useGetUsers