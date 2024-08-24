import JudulPraktikum from "../../../utils/JudulPraktikum"
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";
import useGetschedule from "./useGetSchedule"

const SchedulePraktikan = () => {
    const{isLoading, schedule} = useGetschedule();
    const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
    if(isLoading) return <div>Loading</div>
    if(!schedule) return <div>Loading</div>

    const scheduleMap = schedule.map((val : PraktikanSchedule, idx:number)=>{
      return(
        <div key={idx} className="flex flex-row justify-around bg-white border-2 border-black shadow-md  rounded-md text-black w-full h-20 items-center font-semibold text-center text-sm md:text-base py-7">
          <p className="w-[15%]">{val.week}</p>
          <p className="w-[25%]">{JudulPraktikum(val.JudulAslab.noJudul-1)}</p>
          <p className="w-[25%]" onClick={()=>{
             getProfile(val.JudulAslab.idAslab);
              (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
          }} >
            {val.JudulAslab.Aslab}
          </p>
          <p className="w-[30%] flex flex-col">
            { !val.Schedule?.date?
                <span className="text-center">{`Not Scheduled`}</span>
              :
              <>
                <span className="">{`${val.Schedule?.date}`}</span>
                <span className="font-normal">{`${val.Schedule?.hour}`}</span>
              </>
            }
            </p>
      </div>
    
      )
    })

    return (
      <>
      <ProfileModal profile={Profile} loading={LoadingProfile}/>
      <div className="flex flex-col justify-stretch items-center gap-3 p-2">
          <div className="flex flex-row justify-around bg-black border-2  text-white w-full h-10 items-center font-bold px-1 text-center text-sm md:text-base">
            <p className="pl-2 w-[15%]">Minggu</p>
            <p className="w-[30%]">Judul</p>
            <p className="w-[25%]">Aslab</p>
            <p className="w-[30%]">Jadwal</p>
          </div>
              {scheduleMap}
      </div>
      </>
  )
}

export default SchedulePraktikan