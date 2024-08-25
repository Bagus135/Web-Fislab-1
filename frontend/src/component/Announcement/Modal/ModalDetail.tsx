import { Trash } from "lucide-react"
import useDeleteAnnouncement from "../useDeleteAnnouncement"
import { useAuthContext } from "../../../context/AuthContext"
import { useLocation } from "react-router-dom"

interface ModalDetailProps{
    selectedList : AnnounceTypeRes, 
    trigger? : boolean, 
    setTrigger? : (trigger:boolean)=> void}

const ModalDetail = ({selectedList, trigger, setTrigger}: ModalDetailProps) => {
    const currentLocation = useLocation()
    const {authUser} = useAuthContext()
    const {deleteAnnouncement,isLoading} = useDeleteAnnouncement()
    if(!selectedList){
            return (
                <dialog id="ModalDetailAnnouncement" className="modal w-screen">
                    <div className="modal-box">
                        <p className="py-4 text-center">Loading...</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>  
            )}

    const handleDelete = async() =>{
        if(!setTrigger) return
        await deleteAnnouncement(selectedList.id)
        setTrigger(!trigger)!
    }

    return(
<dialog id="ModalDetailAnnouncement" className="modal w-screen">
    <div className="modal-box">
        <div className="flex flex-col w-full ">
            <p className="text-2xl font-bold text-left pb-7 uppercase">{selectedList.title}</p>
            <div className="rounded-md border border-gray-400 shadow-sm w-1/4 text-center p-1 mb-3">
                {selectedList.judul} 
            </div>
            <p className="text-justify pt-3">
                {selectedList.description}
            </p>
            <div className="w-full flex flex-col justify-end pt-8">
                <p className="text-right">Salam Hangat😋,</p>
                <p className="text-right pr-12 pb-10">Koor</p>
                <p className="text-right">{selectedList.creatorName}</p>
            </div>
        { (authUser?.role as number) > 2 && currentLocation.pathname == "/announcement" ?
            <button
            onClick={handleDelete}
            className={`mt-10 text-white bg-red-500 h-focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-[20%] flex justify-center hover:scale-90 transition duration-500 hover:bg-red-800 ${isLoading? "btn btn-disabled" : ''}`}
            disabled = {isLoading}> 
                            {isLoading? <div className="loading loading-spinner"/> 
                            : 
                               <Trash className="hover:scale-110 transition duration-500"/>
                                }
                    </button>
            :
            null
        }
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>Close</button>
    </form>
  </dialog>  
)}

export default ModalDetail