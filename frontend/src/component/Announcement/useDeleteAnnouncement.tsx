import { useState } from 'react'
import Axios from '../../utils/axios';
import toast from 'react-hot-toast';

const useDeleteAnnouncement = () => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteAnnouncement = async (id : number) => {
        try {
            setIsLoading(true)
            const res = await Axios.delete(`/api/admin/info/${id}`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            (document.getElementById('ModalDetailAnnouncement') as HTMLDialogElement).close()!
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }   
return {deleteAnnouncement,isLoading}
}


export default useDeleteAnnouncement