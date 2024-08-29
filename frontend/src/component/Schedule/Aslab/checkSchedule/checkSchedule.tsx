import { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import Loading from "../../../Other/Loading";
import NotAuth from "../../../Other/NotAuth";
import useGetAllSchedule from "./useAllGetSchedule"
import JudulPraktikum from "../../../../utils/JudulPraktikum";

const CheckSchedulePage = () => {
   
    const {authUser} = useAuthContext();
    if(!authUser) return
   
    return (
    <>
        {authUser?.role > 1 ? <CheckSchedule/>: <NotAuth pageName="Check schedule"/>
        }
    </>
  )
}

const CheckSchedule =()=>{
    const {allSchedule, isLoading} = useGetAllSchedule();
    const [value, setValue] = useState<{hour: string|undefined, date : string|undefined}>({
      hour : undefined,
      date : undefined,
    })
    const HourList = [`07:00 - 09:00`, `09:00 - 11:00`, `11:00 - 13:00`, `13:30 - 15:30`, `15:30 - 17:30`, `19:00 - 21:00`,]

    if(isLoading||!allSchedule) return <Loading/>
    let allScheduled = allSchedule.filter((val)=> val.date !== null)
    if(value.date)
      allScheduled = allScheduled.filter((element) => element.date===value.date)
    if(value.hour)
      allScheduled = allScheduled.filter((element) => element.hour===value.hour)

     const ScheduleFilterMap = allScheduled.map((val,idx)=>{
        return (
            <div key={idx} className="flex flex-row justify-around bg-white border-2 border-black shadow-md  rounded-md text-black w-full h-10 items-center font-bold pr-3 text-center text-sm md:text-base py-7 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
            <p className="w-1/5">{val.aslabIds.week}</p>
            <p className="w-[30%]">{JudulPraktikum(val.aslabIds.noJudul)}</p>
            <p className="w-1/5">{val.kelompokid}</p>
            <p className="w-[30%] flex flex-col"> 
              <span className="">{`${val.date}`}</span>
              <span className="font-normal">{`${val.hour}`}</span>
            </p>
        </div>
        )
     })
    return(
    <>
    <div className="flex flex-col justify-stretch items-center gap-3 p-2">
            <div className="p-2 rounded-md  w-full mt-3  ">
                <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Tanggal</label>
                <div className="relative text-gray-400">
                    <input type="date"
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" 
                            placeholder="11/09/2024"
                            value={value.date}
                            onChange={(e)=> setValue({...value, date : e.target.value})}/>
                </div>
            </div>

            <div className="p-2 rounded-md  w-full">
                    <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Jam</label>
                    <div className="relative ">
                        <select className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" onChange={(e)=> setValue({...value, hour : e.target.value})}>
                         <option value={undefined}>-----</option>
                        {HourList.map((val, idx)=>{ 
                            return (
                            <option value={val} key={idx}>{val}</option>
                            )
                        })}
                         </select>
                    </div>
                </div>
        
          <div className="flex flex-row justify-around bg-black border-2  text-white w-full h-10 items-center font-bold px-3 text-center text-sm md:text-base  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
            <p className="w-1/5">Minggu</p>
            <p className="w-[30%]">Judul</p>
            <p className="w-1/5">Kelompok</p>
            <p className="w-[30%] ml-2">Jadwal</p>
          </div>
         {ScheduleFilterMap?.length === 0 ? `Not Scheduled`: ScheduleFilterMap}
      </div>
    </>
 )
}

export default CheckSchedulePage