import { ChevronRight, PlusSquare } from "lucide-react"
import useGetAnnouncement from "./useGetAnnouncement"
import ModalAdd from "./Modal/ModalAdd"
import { useAuthContext } from "../../context/AuthContext"
import Loading from "../Other/Loading"
import { useState } from "react"
import ModalDetail from "./Modal/ModalDetail"

const Announcement = () => {
    const {authUser} = useAuthContext()
    const {Announcement,isLoading,setTrigger,trigger} = useGetAnnouncement()
    const [selectedList, setSelectedList] = useState<AnnounceTypeRes|null>(null)

    if(!Announcement) return <Loading/>
    
    const AnnouncementMap = Announcement?.map((val, idx)=>{
        return(
        <div key={idx} 
        onClick={() => {
            setSelectedList(val);
            (document.getElementById('ModalDetailAnnouncement') as HTMLDialogElement).showModal()!}}
        className=" hover:bg-gray-200 hover:rounded-sm  hover:px-0 flex flex-row max-w-full max-h-40 overflow-hidden items-center px-2">
            <img src="/toa.png" alt="Icon" className="w-[12%] max-w-14 flex items-center justify-center" />
            
            <div className="flex flex-col mr-3 ml-3 md:ml-5 w-full pl-2 text-justify">
                <div className="font-bold text-l text-left line-clamp-1 w-full md:text-xl ">
                    {val.title}
                </div>
                <div className=" text-sm text-justify line-clamp-3 md:text-xl">
                    {val.description}
                </div>
            </div>
            <ChevronRight className="md:size-10"/>
        </div>
        )
    })

  return (    
  <>
  <ModalDetail  setTrigger={setTrigger} trigger={trigger} selectedList={selectedList!}/>
  <ModalAdd setTrigger={setTrigger} authUser={authUser!} trigger={trigger}/>
    <div className="flex flex-col w-full p-3">
        <div className='flex flex-row justify-between items-center'>
            <p className="font-bold text-xl md:text-2xl text-left pb-5"> Pengumuman</p>
            {(authUser?.role as number) >2 ?
            <button
            onClick={() => (document.getElementById('ModalAddAnnouncement') as HTMLDialogElement).showModal()!}
            className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] h-focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-[15%] mb-6  flex justify-center hover:scale-90 transition duration-500 hover:bg-gray-800 ${isLoading? "btn btn-disabled" : ''}`}
            disabled = {isLoading}> 
                            {isLoading? <div className="loading loading-spinner"/> 
                            : 
                            <div className="flex-row flex justify-center hover:scale-110 transition duration-500">
                                <PlusSquare className=""/>
                            </div>
                                }
             </button>
            : null    
            }
        </div>
        <div  className="bg-white px-2 rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300  w-full border border-black py-6 flex flex-col gap-7 md:gap-10">
            { isLoading?
            <div className="flex justify-center">
                <button className="loading loading-spinner"/>
            </div>
                     :
            Announcement?.length == 0 ? 
            <p className=" text-center pt-5">
                Tidak ada Pengumuman
            </p>    
                :
            AnnouncementMap
        } 
        </div>
    </div>
  </>
  )
}

export default Announcement