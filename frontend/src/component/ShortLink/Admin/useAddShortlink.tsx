import  { useState } from 'react'
import Axios from '../../../utils/axios';
import toast from 'react-hot-toast';

interface valType {
    title : undefined|string,
    description : undefined|string,
    link : undefined|string,
    shortLink : undefined|string,
}

const useAddShortlink = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addShortlink = async (dataId: AuthUserTypes|null, payload:valType) => {
        setIsLoading(true)
        try {
            const res = await Axios.post(`/api/shortlink/${dataId?.id}`,{
                shortlink : payload.shortLink,
                link : payload.link,
                description : payload.description,
                title : payload.title
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
            location.reload();
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }   

return { addShortlink, isLoading }
}

export default useAddShortlink