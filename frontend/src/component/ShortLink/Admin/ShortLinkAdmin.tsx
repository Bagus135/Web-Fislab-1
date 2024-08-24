import { useState } from "react"
import toast from "react-hot-toast"
import useAddShortlink from "./useAddShortlink"
import { PlusSquare } from "lucide-react"

interface valType {
    title : undefined|string,
    description : undefined|string,
    link : undefined|string,
    shortLink : undefined|string,
}

const ShortLinkAdmin = ({authUser}:{authUser:AuthUserTypes}) => {
    const [value, setValue] = useState<valType>({
        title : undefined,
        description : undefined,
        link : undefined,
        shortLink : undefined,
    })
    const {addShortlink,isLoading} = useAddShortlink();
    const [btn, setBtn] = useState<boolean>(false)

    const handlerSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(!value.description||!value.link||!value.shortLink||!value.title) return toast.error(`Please fill all inputs`);
        addShortlink(authUser,value)
    }

  return (
    <>
    <button className="w-full flex justify-center mt-5 text-center text-[#FFFFFF] bg-gray-700 hover:bg-gray-900 text-2xl rounded-lg font-bold px-5 py-2.5 mb-6 " onClick={()=> setBtn(!btn)}>
    <PlusSquare className="size-8"/>
    </button>
    <div className={`${ btn ? "flex flex-col justify-stretch items-center gap-3 p-2" : "hidden"}`}>
            <div className="rounded-md  w-full mt-3  ">
                <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Title</label>
                <div className="relative text-gray-400">
                    <input type="text"
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" 
                            placeholder="Title"
                            value={value.title}
                            onChange={(e)=> setValue({...value, title : e.target.value})}/>
                </div>
            </div>

            <div className="rounded-md  w-full mt-3  ">
                <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Description</label>
                <div className="relative text-gray-400">
                    <input type="text"
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" 
                            placeholder="desc"
                            value={value.description}
                            onChange={(e)=> setValue({...value, description : e.target.value})}/>
                </div>
            </div>

            <div className="rounded-md  w-full mt-3  ">
                <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Url</label>
                <div className="relative text-gray-400">
                    <input type="text"
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" 
                            placeholder="https://xxxx.xxxxx"
                            value={value.link}
                            onChange={(e)=> setValue({...value, link : e.target.value})}/>
                </div>
            </div>

            <div className="rounded-md  w-full mt-3  ">
                <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Shortlink</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">/
                        </span>
                    <input type="text"
                            className="pl-7 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" 
                            placeholder="modul"
                            value={value.shortLink}
                            onChange={(e)=> setValue({...value, shortLink : e.target.value})}/>
                </div>
                <div className="flex justify-end">

                    <button 
                    onClick={handlerSubmit}
                    className={`mt-5 w-1/5 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> 
                            {isLoading? <div className="loading loading-spinner"/> : "Add"}
                    </button>
                </div>
            </div>

           
        </div>
    </>
  )
}

export default ShortLinkAdmin