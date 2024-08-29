import Loading from "../../Other/Loading";
import { useShortLinkContext } from "../../../context/ShortlinkContext"
import { Trash2 } from "lucide-react";
import useDeleteShortlink from "../Admin/useDeleteShortlink";

const Shortlink = ({authUser}:{authUser :AuthUserTypes}) => {
  const {ShortLink,isLoading} = useShortLinkContext();
  const {deleteShortlink, loading} = useDeleteShortlink()
  if(isLoading) return <Loading/>
  if(!ShortLink) return <div>Not Shortlink added</div>
    
  const shortLinkMap = ShortLink.map((val : getShortLink, idx:number)=>{
    return (
        <div key={idx} className=" mt-5 bg-white border shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-500 rounded-lg hover:scale-95 transition duration-500  m-2 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" >
            <div onClick={()=>{location.assign(`${location.origin}/${val.shortLink}`)}}
                className="relative px-5 py-3">
                <div className="flex items-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-[#ffa31a]">{val.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                {val.description}
                </p>
            </div>
            { authUser.role > 2  ?
            <div className="flex z-20 w-full justify-end items-center pr-2" >
                {loading? 
                  <div className="loading loading-dots justify-end"/>
                :
                <Trash2 className='z-20 size-6 text-gray-700 font-bold rounded-md border-2 border-gray-700 hover:scale-110 transition duration-500 hover:border-black hover:text-black dark:text-[#ffa31a] dark:border-[#ffa31a] dark:hover:text-[#ff7d12] dark:hover:border-[#ff7d12]' onClick={()=>{deleteShortlink(val)}}/>
              }
            </div>
            :
            null
          }
          </div>
    )
})

  return (
<div className="mt-5 grid grid-cols-1 md:grid-cols-2">
{ ShortLink.length== 0?
  <p className="text-center">Tidak Ada Link Yang Tersedia</p>
  :
  shortLinkMap}
</div>
  )
}

export default Shortlink