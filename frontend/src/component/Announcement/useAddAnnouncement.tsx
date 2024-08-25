import { useState } from 'react'
import Axios from '../../utils/axios';
import toast from 'react-hot-toast';

interface ValueType{
    title : null|string,
    category : null|string,
    desc : null|string
}
const useAddAnnouncement = () => {
    const [isLoading, setIsLoading] = useState(false);

        const addAnnouncement = async (user : AuthUserTypes, payload:ValueType) => {
            try {
                setIsLoading(true)
                const res = await Axios.post(`/api/admin/info/${user.id}`, {
                    title : payload.title,
                    category : payload.category,
                    desc : payload.desc,
                    name : user.fullname
                }).catch((err : AxiosErr)=>{
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                })
                toast.success(res.data.message);
                (document.getElementById('ModalAddAnnouncement') as HTMLDialogElement).close()!
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   
    return {addAnnouncement,isLoading}
}

export default useAddAnnouncement