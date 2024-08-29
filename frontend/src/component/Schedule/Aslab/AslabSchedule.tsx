import { Info, PlusSquare } from "lucide-react"
import useGetschedule from "./useGetSchedule"
import JudulPraktikum from "../../../utils/JudulPraktikum"
import Loading from "../../Other/Loading"
import { useState } from "react"
import ModalInputSchedule from "./modalInput"
import ModalScheduleInfo from "./modalScheduleInfo"

const AslabSchedule = () => {
    const {isLoading,schedule,setTrigger, trigger} = useGetschedule()
    const [selectSchedule, setSelectSchedule] = useState<AslabSchedule|null>(null);

    if(isLoading) return <Loading/>

    const ScheduleMap = schedule?.map((val, idx)=>{
      return (
        <div key={idx} className="flex flex-row justify-around bg-white border-2 border-black shadow-md  rounded-md text-black w-full h-10 items-center font-bold pr-3 text-center text-sm md:text-base py-7 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
          <p className="w-1/5">{val.week}</p>
          <p className="w-[30%]">{JudulPraktikum(val.noJudul-1)}</p>
          <p className="w-1/5">{val.kelompokId}</p>
          <p className="w-[30%] flex flex-col text-left">
            { !val.Schedule.date?
                <span className="text-center">Not Scheduled</span>
              :
              <>
                <span className="text-center">{`${val.Schedule?.date}`}</span>
                <span className="font-normal text-center">{`${val.Schedule?.hour}`}</span>
              </>
            }
            </p>
          <PlusSquare  onClick={() =>{
        setSelectSchedule(val);
        (document.getElementById(`ModalInputSchedule`) as HTMLDialogElement).showModal()
      }}/>
      </div>
      )
    })

  return (
    <>
    <ModalInputSchedule data={selectSchedule} id="ModalInputSchedule" Trigger={setTrigger} trigger={trigger}/>
    <ModalScheduleInfo id="ModalScheduleInfo"/>
      <div className="flex flex-col justify-stretch items-center gap-3 p-2">
          <div className="flex flex-row justify-around bg-black border-2  text-white w-full h-10 items-center font-bold px-3 text-center text-sm md:text-base dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
            <p className="w-1/5">Minggu</p>
            <p className="w-[30%]">Judul</p>
            <p className="w-1/5">Kelompok</p>
            <p className="w-[30%] ml-2">Jadwal</p>
            <Info onClick={()=> (document.getElementById(`ModalScheduleInfo`) as HTMLDialogElement).showModal()}/>
          </div>
         {ScheduleMap?.length === 0 ? `Not Schedule Yet`: ScheduleMap}
      </div>
    </>
  )
}

export default AslabSchedule