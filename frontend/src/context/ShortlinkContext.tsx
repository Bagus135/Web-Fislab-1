/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/axios";

const ShortLinkContext =  createContext<{
    ShortLink : getShortLink[] | null;
    setShortLink : Dispatch<SetStateAction<getShortLink[]|null>>;
    isLoading : boolean
}>({
    ShortLink: null,
    setShortLink : () => {},
    isLoading : true
});

export function useShortLinkContext(){
    return useContext(ShortLinkContext)
}

export function ShortlinkContextProvider({children} : {children : ReactNode}) {
    const [ShortLink, setShortLink] = useState<getShortLink[]|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        const getShortLink = async() =>{
        try {
            const res = await Axios.get('/api/shortlink/all').catch((err : AxiosErr)=>{
                if(err.code === "ERR_NETWORK") throw new Error(err.message)
                throw new Error(`${err.response.status} - ${err.response.statusText} \n ${err.response.data.error}`)
            });
            setShortLink(res.data.payload)
        } catch (error:any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }
    getShortLink()
},[])

        return (
        <ShortLinkContext.Provider value={{ShortLink,isLoading,setShortLink}}>
            {children}
        </ShortLinkContext.Provider>
    )
}
