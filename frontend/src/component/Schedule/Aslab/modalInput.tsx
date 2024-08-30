import { useState } from "react"
import JudulPraktikum from "../../../utils/JudulPraktikum"
import useAddAslabSchedule from "./useAddAslabSchedule"
import toast from "react-hot-toast"

interface InputSchedule {
    date : undefined|string,
    hour : undefined|string,
}
 interface modalInputSchedule{
  id : string;
  data :AslabSchedule|null;
  Trigger : (trigger : boolean)=> void;
  trigger : boolean
}
const ModalInputSchedule = ({id, data, Trigger, trigger} : modalInputSchedule) => {

  const [value, setValue] = useState<InputSchedule>({
    date : undefined, 
    hour : undefined,
  })
  const {addSchedule ,isLoading} = useAddAslabSchedule();

  const handlerSubmit = async (e : React.FormEvent) =>{
    e.preventDefault();
    if(!value.date||!value.hour) return toast.error(`Fill All Fields Input`);
    
    await addSchedule(data, value);
    Trigger(!trigger);
    (document.getElementById(id) as HTMLDialogElement).close()
  }
    
    if(!data) return (
        <dialog id={id} className="modal w-screen ">
        <div className="modal-box">
        </div>
    
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>  
    )
    const HourList = [`07:00 - 09:00`, `09:00 - 11:00`, `11:00 - 13:00`, `13:30 - 15:30`, `15:30 - 17:30`, `19:00 - 21:00`,]

  return (
        <dialog id={id} className="modal w-screen ">
          <div className="modal-box">
            <div className="text-center flex flex-col justify-center items-center pb-5">
                <h3 className="font-bold text-2xl pb-3 uppercase dark:text-white">Input Schedule</h3>
                <h3 className="font-semibold text-lg dark:text-white">{JudulPraktikum(data?.noJudul-1)}</h3>
                <p className="">{`Kelompok ${data?.kelompokId}`}</p>
            </div>
          
            <div className="flex flex-col">
                <div className="pb-2">
                    <label className="pl-2 block mb-2 text-sm font-medium text-[#111827] dark:text-white">Tanggal</label>
                    <div className="relative text-gray-400">
                        <input type="date"
                                className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]" 
                                placeholder="11/09/2024"
                                value={value.date}
                                onChange={(e)=> setValue({...value, date : e.target.value })}/>
                    </div>
                </div>
                
                <div className="pb-2">
                    <label className="pl-2 block mb-2 text-sm font-medium text-[#111827] dark:text-white">Jam</label>
                    <div className="relative ">
                        <select className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3  dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]" onChange={(e)=> setValue({...value, hour : e.target.value})}>
                         <option value={undefined}>-----</option>
                        {HourList.map((val, idx)=>{ 
                            return (
                            <option value={val} key={idx}>{val}</option>
                            )
                        })}
                         </select>
                    </div>
                </div>

                <button type="button" className=" mt-5 btn bg-black text-white font-bold text-l dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12] " disabled={isLoading} onClick={handlerSubmit}>
                  {isLoading? 
                  <div className="loading loading-spinner"/> 
                  : 
                  "Submit"
                }
                </button>
                
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>  
      )}
      

export default ModalInputSchedule