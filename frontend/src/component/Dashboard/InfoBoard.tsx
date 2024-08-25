import { Pin } from "lucide-react"
import useGetAnnouncement from "../Announcement/useGetAnnouncement"

const InfoBoard = () => {
  const {Announcement} = useGetAnnouncement();
  if(!Announcement) return(
    <div className="flex justify-stretch w-full">
    <div className="bg-white px-2 rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 mt-5 mx-5 mb-5 w-full border border-black pt-2 pb-6">
        <div className="text-center font-bold text-2xl px-2 pt-2 pb-6 w-full md:text-3xl">Pengumuman</div>
          <div className="flex justify-center">
            <div className="loading loading-dots"/>
          </div>
      </div>
  </div>
  )
  const AnnouncementMap = [...Array(3)].map((_,idx)=>{
    if (!Announcement[idx]) return null
    const data = Announcement[idx]
      return (
        <div className="flex flex-row max-w-full max-h-40 overflow-hidden items-center pl-2">

        <img src="/toa.png" alt="Icon" className="w-[12%] max-w-14 flex items-center justify-center" />
       
        <div className="flex flex-col mr-2 ml-3 md:ml-5 w-full pl-2 text-justify">
          <div className="font-bold text-l text-left line-clamp-1 w-full md:text-xl ">{data.title}</div>
          <div className=" text-sm text-justify line-clamp-2 md:text-xl">{data.description}</div>
        </div>
        <div className="flex items-start pb-10 w-[5%] justify-end">
              <Pin className="h-full size-7 md:size-8 rotate-45 flex items-start"/>
        </div>
      </div>
      ) 
  })
  return (
<div className="flex justify-stretch w-full">
    <div className="bg-white px-2 rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 mt-5 mx-5 mb-5 w-full border border-black pt-2 pb-6">
        <div className="text-center font-bold text-2xl px-2 pt-2 pb-6 w-full md:text-3xl">Pengumuman</div>
          <div className="flex w-full flex-col gap-4">
          {Announcement.length == 0 ? 
          <p className="text-center">Tidak Ada Pengumuman</p>
            :
            AnnouncementMap
          }
          
          </div>
    </div>
</div>
  )
}



export default InfoBoard