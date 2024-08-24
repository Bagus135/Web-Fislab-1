import Axios from '../../../utils/axios';
import toast from 'react-hot-toast';


const useDeleteShortlink = () => {
    const deleteShortlink = async (data: getShortLink) => {
        try {
            const res = await Axios.delete(`/api/shortlink/${data.id}`,{
                data :{
                    shortlink : data.shortLink,
                    link : data.link
                }
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
            location.reload();
        } catch (error: any) {
            toast.error(error.message)
        } 
    }   

return { deleteShortlink }
}

export default useDeleteShortlink