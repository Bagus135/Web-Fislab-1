import { useState } from "react"
import useAddAnnouncement from "../useAddAnnouncement"
import toast from "react-hot-toast"

interface ValueType{
    title : null|string,
    category : null|string,
    desc : null|string
}

interface ModalAddProps{
    authUser : AuthUserTypes, 
    trigger : boolean, 
    setTrigger : (trigger:boolean)=> void}

const ModalAdd = ({authUser, trigger, setTrigger}: ModalAddProps) => {
    const [Value , setValue] = useState<ValueType>({
        title : null,
        category : null,
        desc : null
    })
    const {addAnnouncement,isLoading} = useAddAnnouncement()
    
    const handlerSubmit = async() =>{
        if(!Value.category||!Value.desc||!Value.title) return toast.error(`Please Fill All Inputs`)
        await addAnnouncement(authUser, Value)
        setTrigger(!trigger)
    }

  return (
<dialog id="ModalAddAnnouncement" className="modal w-screen">
    <div className="modal-box">
        <div className="w-full flex flex-col gap-3 p-2">
             <p className='font-bold text-2xl text-center pt-2 pb-4'>
                Add Announcement
             </p>

                <div className="pb-2">
                    <label className="block mb-2 text-sm font-medium text-[#111827]">Kategori</label>
                    <div className="relative text-gray-400">
                    <select  onChange={(e)=> setValue({...Value, category : e.target.value})} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3">
                        <option value={null!}>------------</option>
                        <option value={'Umum'}>Umum</option>
                        <option value={'In Lab'}>In Lab</option>
                        <option value={'Jadwal'}>Jadwal</option>
                        <option value={'Pomits'}>Pomits</option>
                        <option value={'Operational'}>Operational</option>
                        <option value={'Lain-Lain'}>Lain-Lain</option>
                    </select>
                </div>
                
                <div className="pb-2">
                    <label className="block mb-2 text-sm font-medium text-[#111827]">Title</label>
                    <div className="relative text-gray-400">
                        <input type="text"
                        className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-[100%] p-2.5 rounded-l-lg py-3 px-4" 
                        placeholder="Judul Pengumuman"
                        value={Value.title!}
                        onChange={(e)=> setValue({...Value, title : e.target.value})}/>
                    </div>
                </div>

                <div className="pb-2">
                    <label className="block mb-2 text-sm font-medium text-[#111827]">Deskripsi</label>
                    <div className="relative text-gray-400">
                        <input type="text"
                        className="  pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-[100%] py-2.5 rounded-l-lg leading-10 px-4 " 
                        placeholder="Judul Pengumuman"
                        value={Value.desc!}
                        onChange={(e)=> setValue({...Value, desc : e.target.value})}/>
                    </div>
                </div>

                <button
            onClick={handlerSubmit}
                    className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] h-focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-[100%] mb-6  flex justify-center hover:scale-90 transition duration-500 hover:bg-gray-800 ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> 
                            {isLoading? <div className="loading loading-spinner"/> 
                            : 
                                "Add"
                                }
                    </button>
            </div>
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>Close</button>
    </form>
  </dialog>  
)
}

export default ModalAdd