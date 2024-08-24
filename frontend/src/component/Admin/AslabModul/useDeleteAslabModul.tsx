import Axios from '../../../utils/axios';
import toast from 'react-hot-toast';

const useDeleteAslabModul = () => {
    const deleteJudulAslab = async ( uid:any) => {
        try {
            const res = await Axios.delete(`/api/admin/judulaslab/${uid}`).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            } catch (error: any) {
                toast.error(error.message)
            } 
        }
    return {deleteJudulAslab}
}

export default useDeleteAslabModul