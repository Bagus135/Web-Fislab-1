import { useState } from "react";
import Axios from "../../utils/axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useEditProfile = (authUser : AuthUserTypes|null) => {
    const{setAuthUser} = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [ProfileUser, setProfileUser] = useState(authUser)
    const editProfile = async ( authUser:AuthUserTypes|null, payload:any) => {
        setIsLoading(true)
        try {
            const res = await Axios.put(`/api/profile/user/${authUser?.id}`, {
                nickname : !payload.nickname? authUser?.nickname : payload.nickname,
                contact : !payload.contact? authUser?.contact : payload.contact,
                description : !payload.description? authUser?.description : payload.description,
                email : !payload.email? authUser?.email : payload.email,
                github : !payload.github? authUser?.github : payload.github,
                ig : !payload.ig? authUser?.ig : payload.ig,
                profilPic : !payload.profilPic? authUser?.profilPic : payload.profilPic, 
                title: !payload.title? authUser?.title : payload.title,
            }).catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            })
            toast.success(res.data.message);
            setProfileUser(res.data.payload)
            setAuthUser(res.data.payload)
            } catch (error: any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }   

    return {editProfile, isLoading, setProfileUser, ProfileUser }
}

export default useEditProfile