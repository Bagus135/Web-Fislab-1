import { Megaphone, Pin } from "lucide-react"
import useGetAnnouncement from "../Announcement/useGetAnnouncement"
import ModalDetail from "../Announcement/Modal/ModalDetail";
import { useState } from "react";
import { Link } from "react-router-dom";

const InfoBoard = () => {
  const {Announcement} = useGetAnnouncement();
  const [selectedList, setSelectedList] = useState<AnnounceTypeRes|null>(null)
  if(!Announcement) return(
    <div className="flex justify-stretch w-full">
    <div className="bg-white px-2 rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 mt-5 mx-5 mb-5 w-full border border-black pt-2 pb-6 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] ">
        <div className="text-center font-bold text-2xl px-2 pt-2 pb-6 w-full md:text-3xl ">Pengumuman</div>
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
        <div key={idx} className="flex flex-row max-w-full max-h-40 overflow-hidden items-center hover:bg-gray-200 rounded-sm hover:scale-95 duration-300 dark:hover:bg-[#808080] dark:hover:text-black"  onClick={() => {
          setSelectedList(data);
          (document.getElementById('ModalDetailAnnouncement') as HTMLDialogElement).showModal()!}}>

          <Megaphone className="size-10 md:size-14 text-black dark:text-white -rotate-12"/>
       
        <div className="flex flex-col mr-2 ml-3 md:ml-5 w-full pl-2 text-justify">
          <div className="font-bold text-l text-left line-clamp-1 w-full md:text-xl dark:text-[#ffa31a]">{data.title}</div>
          <div className=" text-sm text-justify line-clamp-2 md:text-xl">{data.description}</div>
        </div>
        <div className="flex items-start pb-10 w-[5%] justify-end">
              <Pin className="h-full size-7 md:size-8 rotate-45 flex items-start dark:text-[#ffa31a]"/>
        </div>
      </div>
      ) 
  })


  return (
    <>
    <ModalDetail selectedList={selectedList!} />
<div className="flex justify-stretch w-full">
    <div className="bg-white px-2 rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 dark:shadow-[#292929] mt-5 mx-5 mb-5 w-full border border-black pt-2 pb-6 dark:bg-[#1b1b1b] dark:border-[#808080]">
        <div className="text-center font-bold text-2xl px-2 pt-2 pb-6 w-full md:text-3xl dark:text-white">Pengumuman</div>
          <div className="flex w-full flex-col gap-6">
          {Announcement.length == 0 ? 
          <p className="text-center">Tidak Ada Pengumuman</p>
          :
            AnnouncementMap
          }
          {
            Announcement.length > 3 ? 
              <Link to={'/announcement'} className=" text-center border hover:font-medium border-black rounded-md mt-3 mx-5 md:p-2  hover:border-gray-400 dark:border-[#808080] dark:hover:border-white">
                Lihat Selengkapnya
              </Link>
            :
            null 
          }
          
          </div>
    </div>
</div>
  </>
  )
}



export default InfoBoard