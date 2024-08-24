import Axios from '../../../utils/axios';
import toast from 'react-hot-toast';

const useDeleteAslabSession = () => {
    const deleteAslabSession = async ( id : string, no : number, noKel : number, noJudul:number, aslabId:string) => {
        try {
            const res = await Axios.delete(`/api/admin/weekschedule/${id}/${no}`,{
                data : {
                    noKel, noJudul, aslabId
                }
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            } catch (error: any) {
                toast.error(error.message)
            } 
        }
    return {deleteAslabSession}
}

export default useDeleteAslabSession