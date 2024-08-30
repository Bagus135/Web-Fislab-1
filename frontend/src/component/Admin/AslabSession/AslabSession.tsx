import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useGetAslabModul from "../AslabModul/useGetAslabModul";
import useAddAslabSession from "./useAddAslabSession";
import useDeleteAslabSession from "./useDeleteAslabSession";
import useGetAslabSession from "./useGetAslabSession";
import NotAuth from "../../Other/NotAuth";
import Loading from "../../Other/Loading";
import {Trash } from "lucide-react";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";

interface inputvalue {
  idJudulAslab : null|string
  nomorKel : null | number,
  week : null | number,
  noJudul : number|null,
  aslabId : string|null,
  aslab : null|string,
}

const AslabSession = () => {
  const{authUser} = useAuthContext()
  const { dataJudul,isLoading:loading} = useGetAslabModul();
  const {addAslabSession,isLoading : loadingAdd} = useAddAslabSession();
  const {trigger,setTrigger,SessionAslab,isLoading : LoadAll} = useGetAslabSession();
  const {deleteAslabSession, loadDelete} = useDeleteAslabSession();
  const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()

  const [value, setValue] = useState<inputvalue>({
    idJudulAslab : null,
    nomorKel : null,
    week : null,
    noJudul : null,
    aslabId : null,
    aslab : null,
  })
  
  if(!dataJudul||!SessionAslab||loading) return <Loading/>
  if( (authUser?.role as number) < 3) return <NotAuth pageName="Praktikan Role"/> 

  
  dataJudul.sort((a,b)=>{
    if(Number(a.noJudul)< Number(b.noJudul)) return -1
    if(Number(a.noJudul)> Number(b.noJudul)) return 1
    return 0
})
  const hanldleSelectAslab = (e : any) =>{
      const data = dataJudul![Number(e.target.value)]
      setValue({...value, aslab : data.Aslab , aslabId : data.idAslab, idJudulAslab : data.id, noJudul : data.noJudul})
  }

  const handleSubmit = async (e : React.FormEvent) =>{
      e.preventDefault();
      await addAslabSession(value);
      setTrigger(!trigger);
  }
  
  const handleSubmitDelete = async (id : string, no : number, noKel : number, noJudul:number, aslabId:string) =>{
      await deleteAslabSession(id,no, noKel, noJudul, aslabId);
      setTrigger(!trigger);
  }
  
  const SessionAslabMap = SessionAslab.map((val, idx)=>{
      return (
        <div className="rounded-md w-full shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300  flex flex-row items-center border border-black gap-1 p-2 text-center  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" key={idx}>
          <div className="w-[15%]">{val.JudulAslab.kodeJudul}</div>
          <div className="w-[25%]">{val.kelompokId}</div>
          <div className="w-[15%]">{val.week}</div>
          <div className="w-[35%]" onClick={()=>{
            getProfile(val.JudulAslab.idAslab);
            (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
            }} >
            {val.JudulAslab.Aslab}
          </div>
          <div onClick={() => handleSubmitDelete(val.idJudulAslab, val.no, val.kelompokId, val.JudulAslab.noJudul, val.JudulAslab.idAslab)} className="w-[10]">
            { loadDelete?
              <div className="loading loading-dots"/>
              :
              <Trash className=" text-red-500 font-bold rounded-md border-2 border-red-500 hover:scale-110 transition duration-500"/>
            }
          </div>
      </div>
      )
  })

  return (
  <>
   <ProfileModal profile={Profile} loading={LoadingProfile}/>
  <div className="">
  <h1 className="font-bold text-2xl text-center mt-5 dark:text-white"> Aslab Session</h1>
      <form className='flex flex-col items-center p-2 mt-5 justify-start text-center w-full' onSubmit={handleSubmit}>

      <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Aslab</label>
            <div className="relative w-full">
                <select onChange={hanldleSelectAslab} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
                <option value={undefined}>-----</option>
                {dataJudul!.map((val , idx : number)=>{ return (
                    <option value={idx} key={idx}>{`${val.kodeJudul} - ${val.Aslab}`}</option>
                )
                })}
                </select>
            </div>
        </div>

      <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Kelompok</label>
            <div className="relative w-full">
                <select onChange={(e)=>setValue({...value, nomorKel : Number(e.target.value)})} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
                <option value={undefined}>-----</option>
                {[...Array(20)].map((_, idx : number)=>{ return (
                    <option value={idx+1} key={idx+1}>{`${idx+1}`}</option>
                    )
                 })}
                </select>
            </div>
        </div>

      <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Week</label>
            <div className="relative w-full">
                <select onChange={(e)=> setValue({...value, week : Number(e.target.value)})} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
                <option value={undefined}>-----</option>
                {[...Array(11)].map((_, idx : number)=>{ return (
                <option value={idx+3} key={idx+3}>{`${idx+3}`}</option>
                    )
                })}
                </select>
            </div>
        </div>

      <button type="submit"
                    className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mb-6 hover:bg-gray-800 dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12] ${loadingAdd? "btn btn-disabled" : ''}`}
                    disabled = {loadingAdd}> 
                            {loadingAdd? <div className="loading loading-spinner"/> : "Add"}
                    </button>
    </form>

    <div className="flex flex-col justify-stretch items-center gap-3 p-2">
            <div className="flex flex-row justify-around bg-black border-2  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a] text-white w-full h-10 items-center font-bold text-center text-sm md:text-base">
                <p className="w-[15%]">Kode</p>
                <p className="w-[25%]">Kelompok</p>
                <p className="w-[15%]">Week</p>  
                <p className="w-[35%]">Aslab</p>  
                <p className="w-[10%]"></p>  
            </div>
            {LoadAll? 
            <>
             <div className="flex justify-center">
                <div className="loading loading-spinner"></div>
             </div>
            </>
            :
            null
            }
                {SessionAslab.length==0? <p className="text-center">--No Data--</p> : SessionAslabMap}
                 
          </div>
  </div>
      
</>
  )
}

export default AslabSession