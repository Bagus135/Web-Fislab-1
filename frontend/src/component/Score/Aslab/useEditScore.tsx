import { useState } from "react";
import Axios from "../../../utils/axios";
import toast from "react-hot-toast";

interface InputScore{
    PreLab: number;
    InLab: number;
    Abstrak: number;
    Pendahuluan: number;
    Metodologi: number;
    Pembahasan: number;
    Kesimpulan: number;
    Format: number;
    comment: string|null;
}

const useEditScore = () => {
    const[isLoading, setIsLoading] = useState<boolean>(false);

    const editScore = async (praktikan : aslabScoringDetails, input : InputScore, nilaiTotal : number) =>{
        try {
            setIsLoading(true)
            const res =  await Axios.put(`/api/score/aslab/${praktikan.userId}/${praktikan.kelompokId}`, {
                noJudul : praktikan.noJudul, 
                PreLab : input.PreLab,
                InLab : input.InLab, 
                Abstrak : input.Abstrak,
                Pendahuluan : input.Pendahuluan, 
                Metodologi : input.Metodologi, 
                Pembahasan : input.Pembahasan,
                Kesimpulan : input.Kesimpulan, 
                Format : input.Format, 
                nilaiTotal : nilaiTotal, 
                comment : input.comment
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message)
        } catch (error:any){
            toast.error(error.message);
        } finally{
            setIsLoading(false)
        }
    }
    return {editScore, isLoading}
}

export default useEditScore