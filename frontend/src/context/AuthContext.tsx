/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/axios";

const AuthContext =  createContext<{
    authUser : AuthUserTypes | null;
    setAuthUser : Dispatch<SetStateAction<AuthUserTypes|null>>;
    isLoading : boolean
}>({
    authUser : null,
    setAuthUser : () => {},
    isLoading : true
});

export function useAuthContext(){
    return useContext(AuthContext)
}

export function AuthContextProvider({children} : {children : ReactNode}) {
    const [authUser, setAuthUser] = useState<AuthUserTypes|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        const fetchAuthUser = async() =>{
            try {
                const res = await Axios.get("/api/auth/me").catch((err : AxiosErr)=> {
                    if(err.code === "ERR_NETWORK") throw new Error(err.message)
                    throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
                });
                setAuthUser(res.data.payload)
            } catch (error:any) {
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchAuthUser()
        },[])

        return (
        <AuthContext.Provider value={{authUser,isLoading,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}
